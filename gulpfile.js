var gulp = require('gulp');
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var tsify = require("tsify");
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();

var paths = {
    pages: ['src/*.html'],
    source: './src',
    sourceCSS: './src/styles/main.less',
    sourceLESS: './src/styles/**/*.less',
    dest: './dist',
    destCSS:  './dist/styles/'
};

//task: "copy-html" copy html to destination
gulp.task("copy-html", function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest("dist"));
});

//task: "gulp" copy html, and update css to destination
gulp.task("default", ["copy-html", "css"], function () {
    return browserify({
        basedir: '.',
        debug: true,
        entries: ['src/js/main.ts'],
        cache: {},
        packageCache: {}
    })
    .plugin(tsify)
    .transform('babelify', {
        presets: ['es2015'],
        extensions: ['.ts']
    })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './dist'
    },
  })
});

//task: "css" update css to destination
gulp.task('css', function () {
  return gulp.src(paths.sourceCSS)
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(sourcemaps.write('.'))
    .pipe(browserSync.reload({ stream: true }))
    .pipe(gulp.dest(paths.destCSS));
});

//cmd: "gulp watch" output css live without reloading
gulp.task('watch', ['browserSync'], function(){
  gulp.watch(paths.sourceLESS, ['css']);
});



// Used for live typescript rendering...
// var ts = require('gulp-typescript');
// var tsProject = ts.createProject('tsconfig.json');
// var watchify = require("watchify");
// var gutil = require("gulp-util");

// var watchedBrowserify = watchify(browserify({
//     basedir: '.',
//     debug: true,  //true: Causes tsify to emit source maps inside the bundled JavaScript file
//     entries: ['src/js/main.ts'],
//     cache: {},
//     packageCache: {}
// }).plugin(tsify));

// function bundle() {
//     return watchedBrowserify
//         .bundle()
//         .pipe(source('bundle.js'))
//         .pipe(gulp.dest("dist/js"));
// }

//gulp.task("default", ["copy-html"], bundle);
// watchedBrowserify.on("update", bundle);
// watchedBrowserify.on("log", gutil.log);