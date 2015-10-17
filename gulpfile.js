var gulp = require('gulp'),
		jade = require('gulp-jade'),
		sass = require('gulp-ruby-sass'),
		uglify = require('gulp-uglify'),
		browserSync = require('browser-sync').create();

// Jade
gulp.task('jadify', function(){
	gulp.src('index.jade')
			.pipe(jade({
				pretty: true
			}))
			.pipe(gulp.dest('.')); // Output the file in the current folder with the same name.
});
// Sass
gulp.task('sass', function(){
	sass('includes/css/main.sass')
	.pipe(gulp.dest('includes/css/'));
});
// Uglify scripting files.
gulp.task('uglifyScripts', function(){
	gulp.src('includes/js/script.js')
			.pipe(uglify())
			.pipe(gulp.dest('includes/js/minjs'));
});

// Browser Sync
gulp.task('serve', ['sass'], function(){

	browserSync.init({
		server: "."
	});
	gulp.watch("includes/css/main.css").on('change', browserSync.reload);
	gulp.watch("index.html").on('change', browserSync.reload);
	gulp.watch("includes/js/minjs/script.js").on('change', browserSync.reload);
});

// Gulp Watch
gulp.task('watch', function(){
	gulp.watch('index.jade', ['jadify']);
	gulp.watch('includes/css/main.sass', ['sass']);
	gulp.watch('includes/js/script.js', ['uglifyScripts']);
});

gulp.task('default', ['watch', 'serve']);


