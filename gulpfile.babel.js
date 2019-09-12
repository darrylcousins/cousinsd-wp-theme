import gulp from 'gulp';

import watch from './semantic/tasks/watch';

var
  watch = require('path/to/semantic/tasks/watch')
;
gulp.task('watch ui', watch);

export const hello = (cb) => {
    console.log('First Task');
    cb();
}

export const promise = (cb) => {
    return new Promise((resolve, reject) => {
          setTimeout(() => {
                  resolve();
                }, 300);
        });
};

export default hello;
