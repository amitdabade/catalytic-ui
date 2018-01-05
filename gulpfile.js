var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var reload      = browserSync.reload;

// Static server
gulp.task('browser-sync', function() {
    return browserSync.init({
        server: {
            baseDir: "./src/"
        },
        port:8888
    });
});

// Reload all Browsers
gulp.task('bs-reload', function() {
  browserSync.reload();
});

//SASS to css
gulp.task('sass', function() {
  return gulp.src('./src/*.scss')
    // .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/'))
    .pipe(reload({
      stream: true
    }));
});









//Default task
//watch file and reload browser
gulp.task('default', ['browser-sync', 'sass'], function(){
  gulp.watch(['./src/*.scss'], ['sass']);
  gulp.watch(['./src/*.html'], ['bs-reload']);
  gulp.watch(['./src/*.js'], ['bs-reload']);
  gulp.watch(['./src/*.css'], ['bs-reload']);
});
