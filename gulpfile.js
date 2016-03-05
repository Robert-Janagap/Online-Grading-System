var gulp = require('gulp');
var jade = require('gulp-jade');
var sass = require('gulp-sass');


gulp.task('jade', function(){
	return gulp.src('src/views/*.jade')
			.pipe(jade({
				pretty: true
				}))
			.pipe(gulp.dest('./public/'))
	});

gulp.task( 'sass',function(){

	return gulp.src( './src/scss/*.scss' )
	    .pipe( sass({outputStyle: 'compressed'}) )
	    .pipe( gulp.dest( 'public/css/' ) );

} );

gulp.task( 'watching',function(){
    gulp.watch( './src/scss/**/*.scss',[ 'sass' ] );
    gulp.watch( './src/views/**/*.jade',[ 'jade' ] );
	} );

gulp.task('default', ['watching']);

