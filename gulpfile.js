const gulp = require('gulp');
const eslint = require('gulp-eslint');

gulp.task('lint:test', () => {
  return gulp.src('./test/**/*test.js')
    .pipe(eslint({
      envs : [
        'mocha'
      ]
    }))
    .pipe(eslint.format());
});
