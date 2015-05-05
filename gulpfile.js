var gulp = require('gulp'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	minifyCss = require('gulp-minify-css')
	HTML = require('gulp-minify-html');

gulp.task('sass', function () {
    gulp.src('src/sass/app.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('./maps'))
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/css'));

});

gulp.task('HTML', function() {
  var opts = {
    conditionals: true,
    spare:true
  };
 
  return gulp.src('src/html/*.html')
    .pipe(HTML(opts))
    .pipe(gulp.dest('dist/html/'));
});

gulp.task('watch', function(){
	gulp.watch('src/**/*.scss', ['sass']),
	gulp.watch('src/**/*.html', ['HTML']);
});



gulp.task ('default', ['sass','watch','HTML']);
