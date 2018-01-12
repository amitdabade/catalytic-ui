var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var cleanCSS    = require('gulp-clean-css');
var uglify      = require('gulp-uglify');
var rename      = require("gulp-rename");
var reload      = browserSync.reload;

// Static server
gulp.task('browser-sync', function() {
    return browserSync.init({
        server: {
            baseDir: "./code/"
        },
        port:8888
    });
});

// Reload all Browsers
gulp.task('bs-reload', function() {
  browserSync.reload();
});

//SCSS to css
gulp.task('sass', function() {
  return gulp.src('./code/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./code/'))
    .pipe(reload({
      stream: true
    }));
});

//minify css
gulp.task('minify-css', () => {
  return gulp.src('./code/*.css')
    .pipe(cleanCSS({compatibility: 'ie8',keepBreaks: true}))
    .pipe(rename({
            suffix: '.min'
        }))
    .pipe(gulp.dest('src'));
});



//minify js
gulp.task('compress', function () {
  return gulp.src('./code/*.js')
    .pipe(uglify())
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest('src'));
});

//make build code
gulp.task('build', function() {
    'sass',
    'minify-css',
    'compress';
});


//Default task
//watch file and reload browser
gulp.task('default', ['browser-sync', 'sass','minify-css','compress'], function(){
  gulp.watch(['./code/*.scss'], ['sass']);
  gulp.watch(['./code/*.html'], ['bs-reload']);
  gulp.watch(['./code/*.js'], ['bs-reload']);
  gulp.watch(['./code/*.css'], ['bs-reload']);
});
