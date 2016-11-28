var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');


gulp.task('browser-sync', ['rebuild'], function(){
	browserSync({
		server: {
			baseDir: './source/'
		}
	});
});

gulp.task('rebuild', function(){
	browserSync.reload();
});

gulp.task('watch', function(){
	gulp.watch(['**/*.html'], ['rebuild']);
});

gulp.task('default', ['browser-sync', 'watch']);
