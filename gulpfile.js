var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './source'
    },
  })
});

//steps to create basic gulp file
//npm init
//npm install --save-dev gulp

var paths = {
    source: './source',
    sourceCSS: './source/styles/**.less',
    destCSS:  './source/styles'
};

gulp.task('css', function () {
  return gulp.src(paths.sourceCSS)
    .pipe(less())
    .pipe(browserSync.reload({ stream: true }))
    .pipe(gulp.dest(paths.destCSS));
});

//cmd: gulp watch
gulp.task('watch', ['browserSync'], function(){
  gulp.watch(paths.sourceCSS, ['css']);
});


//gulp.task('default', ['css', 'html', 'js', 'img']);