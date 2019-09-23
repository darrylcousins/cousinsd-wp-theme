// initial code borrowed from:
// https://github.com/thecodercoder/frontend-boilerplate/blob/master/gulpfile.js
// https://css-tricks.com/gulp-for-wordpress-creating-the-tasks/

import yargs from 'yargs';
import webpack from 'webpack-stream';
import gulp from 'gulp';
import gulpif from 'gulp-if';
import sourcemaps from 'gulp-sourcemaps';
import imagemin from 'gulp-imagemin';
import named from 'vinyl-named';
import less from 'gulp-less';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cleanCss from 'gulp-clean-css';
import replace from 'gulp-replace';
import browserSync from 'browser-sync';
import zip from 'gulp-zip';
import wpPot from 'gulp-wp-pot';
import del from 'del';

import info from './package.json';

const PRODUCTION = yargs.argv.prod;

// var watch = require('path/to/semantic/tasks/watch');
// gulp.task('watch ui', watch);

export const hello = (cb) => {
    console.log('Hello');
    cb();
}

// refreshes the browser each time tasks finish running
const server = browserSync.create();
export const serve = done => {
  server.init({
    proxy: 'http://localhost' // put your local website link here
  });
  done();
};
export const reload = done => {
  server.reload();
  done();
};

// File paths
const srcFiles = { 
  lessPath: 'src/less/**/*.less',
  jsPath: 'src/js/**/*.js',
  imagePath: 'src/images/**/*.{jpg,jpeg,png,svg,gif}',
  copyPath: ['src/**/*', '!src/{images,js,less}','!src/{images,js,less}/**/*'],
}

// Css task: compiles the bundle.less file into bundle.css
export const styles = () => {
  return gulp.src(['src/less/bundle.less', 'src/less/admin.less'])
    .pipe(gulpif(!PRODUCTION, sourcemaps.init()))
    .pipe(less())
    .pipe(gulpif(PRODUCTION, postcss([ autoprefixer ])))
    .pipe(gulpif(PRODUCTION, cleanCss({compatibility:'ie8'})))
    .pipe(gulpif(!PRODUCTION, sourcemaps.write()))
    .pipe(gulp.dest('dist/css'))
    .pipe(server.stream());
}

// scripts task: concatenates and uglifies js files to bundle.js
export const scripts = () => {
  return gulp.src('src/js/bundle.js')
    .pipe(named())
    .pipe(webpack({
      module: {
	rules: [
	  {
	    test: /\.js$/,
	    use: {
	      loader: 'babel-loader',
	      options: {
		presets: ['@babel/preset-env']
	      }
	    }
	  }
	]
      },
      mode: PRODUCTION ? 'production' : 'development',
      devtool: !PRODUCTION ? 'inline-source-map' : false,
      output: {
	filename: '[name].js'
      },
      externals: {
	jquery: 'jQuery'
      },
    }))
    .pipe(gulp.dest('dist/js'));
}

// compress images and move to dest folder
export const images = () => {
  return gulp.src(srcFiles.imagePath)
    .pipe(gulpif(PRODUCTION, imagemin()))
    .pipe(gulp.dest('dist/images'));
}

// copy any other files that do not require processing
export const copy = () => {
  return gulp.src(srcFiles.copyPath)
    .pipe(gulp.dest('dist'));
}

// copy tachyons
export const tachyons = () => {
  return gulp.src('node_modules/tachyons/css/tachyons.min.css')
    .pipe(gulp.dest('dist/css'));
}

// compress files for distribution
export const compress = () => {
  return gulp.src([
        "**/*",
        "!node_modules{,/**}",
        "!bundled{,/**}",
        "!src{,/**}",
        "!.babelrc",
        "!.gitignore",
        "!gulpfile.babel.js",
        "!package.json",
        "!package-lock.json",
      ])
    .pipe(replace("_themename", info.name))
    .pipe(gulpif(file => file.relative.split('.').pop() != 'zip', zip(`${info.name}.zip`)))
    .pipe(gulp.dest('bundled'));
};

export const pot = () => {
  return gulp.src("**/*.php")
    .pipe(wpPot({
      domain: "_themename",
      package: info.name
    }))
    .pipe(gulp.dest(`languages/${info.name}.pot`));
};

// clean task: delete dist folder
export const clean = () => del(['dist']);

// Watch task: watch LESS and JS files for changes
// If any change, run less and js tasks simultaneously
export const watch = () => {
  gulp.watch(srcFiles.lessPath, styles); // reload done with server stream in styles    
  gulp.watch(srcFiles.jsPath, gulp.series(scripts, reload)); 
  gulp.watch(srcFiles.imagePath, gulp.series(images, reload));
  gulp.watch(srcFiles.copyPath, gulp.series(copy, reload));
  gulp.watch('**/*.php', reload);
}

export const dev = gulp.series(clean, gulp.parallel(styles, images, copy, scripts, tachyons), serve, watch);
export const build = gulp.series(clean, gulp.parallel(styles, images, copy, scripts, tachyons), pot, compress);
export default dev;
