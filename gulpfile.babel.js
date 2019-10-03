// initial code borrowed from:
// https://github.com/thecodercoder/frontend-boilerplate/blob/master/gulpfile.js
// https://css-tricks.com/gulp-for-wordpress-creating-the-tasks/

import yargs from 'yargs';
import webpack from 'webpack-stream';
import gulp from 'gulp';
import gulpif from 'gulp-if';
import eslint from 'gulp-eslint';
import babel from 'gulp-babel';
import sourcemaps from 'gulp-sourcemaps';
import imagemin from 'gulp-imagemin';
import newer from 'gulp-newer';
import rename from 'gulp-rename';
import named from 'vinyl-named';
import sass from 'gulp-sass';
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
  scssPath: 'src/scss/**/*.scss',
  jsxPath: 'src/js/components/*.jsx',
  jsPath: 'src/js/components/*.js',
  imagePath: 'src/images/**/*.{jpg,jpeg,png,svg,gif}',
  copyPath: ['src/**/*', '!src/{images,js,scss}','!src/{images,js,scss}/**/*'],
}

// Css task: compiles the bundle.scss file into bundle.css
export const styles = () => {
  return gulp.src(srcFiles.scssPath)
    .pipe(gulpif(!PRODUCTION, sourcemaps.init()))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulpif(PRODUCTION, postcss([ autoprefixer ])))
    .pipe(gulpif(PRODUCTION, cleanCss({compatibility:'ie8'})))
    .pipe(concat('app.css'))
    .pipe(gulpif(!PRODUCTION, sourcemaps.write()))
    .pipe(gulp.dest('dist/css'))
    .pipe(server.stream());
}

// copy tachyons
// TODO: concatenate this with the bundle.css file
export const copyTachyons = () => {
  if (PRODUCTION) {
    return gulp.src('node_modules/tachyons/css/tachyons.min.css')
      .pipe(gulp.dest('dist/css'));
  } else {
    return gulp.src('node_modules/tachyons/css/tachyons.css')
      .pipe(gulp.dest('dist/css'));
  }
}

// lint javascript files
export const jslint = () => {
    return gulp.src(srcFiles.jsxPath)
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());
}

// scripts task: concatenates and uglifies js files to bundle.js
export const back = () => {
  return gulp.src(srcFiles.jsxPath)
    .pipe(gulpif(!PRODUCTION, sourcemaps.init()))
    .pipe(babel())
    .pipe(concat('app.js'))
    .pipe(gulpif(!PRODUCTION, sourcemaps.write()))
    .pipe(gulp.dest('dist/js'));
}

// NOTE: Using webpack - why not move away from gulp to webpack entirely?
export const scripts = () => {
  return gulp.src(['src/js/components/app.jsx'])
    .pipe(named())
    .pipe(webpack({
      module: {
	rules: [
	  {
	    test: /\.jsx$/,
	    use: {
	      loader: 'babel-loader',
	      options: {
		presets: ['@babel/preset-env', '@babel/preset-react']
	      }
	    }
	  }
	]
      },
      mode: PRODUCTION ? 'production' : 'development',
      devtool: !PRODUCTION ? 'inline-source-map' : false,
      output: {filename: '[name].js'},
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
// If any change, run scss and js tasks simultaneously
export const watch = () => {
  gulp.watch(srcFiles.scssPath, styles); // reload done with server stream in styles    
  gulp.watch(srcFiles.jsPath, gulp.series(scripts, reload)); 
  gulp.watch(srcFiles.jsxPath, gulp.series(scripts, reload)); 
  gulp.watch(srcFiles.imagePath, gulp.series(images, reload));
  gulp.watch(srcFiles.copyPath, gulp.series(copy, reload));
  gulp.watch('**/*.php', reload);
}

export const dev = gulp.series(clean, gulp.parallel(styles, images, copy, scripts, copyTachyons), serve, watch);
export const build = gulp.series(clean, gulp.parallel(styles, images, copy, scripts, copyTachyons), pot, compress);
export default dev;


// DEPRECATED
// copy react and react-dom files if newer
export const copyReact = () => {
  var prefix = 'node_modules/react/umd/react';
  var src = PRODUCTION ? prefix + '.production.min.js' : prefix + '.development.js';
  return gulp.src(src)
    .pipe(newer('/src/js/vendor/react.js'))
    .pipe(rename('react.js'))
    .pipe(gulp.dest('src/js/vendor'));
}
export const copyReactDom = () => {
  var prefix = 'node_modules/react-dom/umd/react-dom';
  var src = PRODUCTION ? prefix + '.production.min.js' : prefix + '.development.js';
  return gulp.src(src)
    .pipe(newer('src/js/vendor/react-dom.js'))
    .pipe(rename('react-dom.js'))
    .pipe(gulp.dest('src/js/vendor'));
}

// DEPRECATED
// copy react files
export const copyVendor = () => {
  return gulp.src('src/js/vendor/*')
    .pipe(gulp.dest('dist/js'));
}
