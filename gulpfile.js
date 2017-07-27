var gulp = require('gulp'),
	concatCss = require('gulp-concat-css'),
	gcmq = require('gulp-group-css-media-queries'),
	cleanCSS = require('gulp-clean-css'),
	livereload = require('gulp-livereload');


// Minified normalize file
gulp.task('css-normalize', function () {
	return gulp.src('src/mikka-normalize.css')
	.pipe(concatCss('mikka-normalize.min.css'))
	.pipe(cleanCSS())
	.pipe(gulp.dest('src/'))
	.pipe(livereload());
});


// Minified grid css file
gulp.task('css-grid', function () {
	return gulp.src('src/mikka-grid.css')
	.pipe(concatCss('mikka-grid.min.css'))
	.pipe(cleanCSS())
	.pipe(gulp.dest('src/'))
	.pipe(livereload());
});


// Minified responsive css file
gulp.task('css-responsive', function () {
	return gulp.src('src/mikka-responsive.css')
	.pipe(concatCss('mikka-responsive.min.css'))
	.pipe(cleanCSS())
	.pipe(gulp.dest('src/'))
	.pipe(livereload());
});


// Minified common css file
gulp.task('css-main', function () {
	return gulp.src([
						'src/mikka-normalize.css',
						'src/mikka-grid.css'
					])
	.pipe(concatCss("mikka-ui.min.css"))
	.pipe(gcmq())
	.pipe(cleanCSS())
	.pipe(gulp.dest('src/'))
	.pipe(livereload());
});


// Livereload section -------------------------------------------------------
gulp.task('css', function () {
	return gulp.src('css/*.css')
	.pipe(livereload());
});

gulp.task('html', function () {
	return gulp.src('*.html')
	.pipe(livereload());
});

gulp.task('js', function () {
	return gulp.src('js/*.js')
	.pipe(livereload());
});
// Livereload section -------------------------------------------------------


// Default
gulp.task('default', function () {
	livereload.listen();
	gulp.watch('src/mikka-normalize.css', ['css-normalize']);
	gulp.watch('src/mikka-grid.css', ['css-grid']);
	gulp.watch('src/mikka-responsive.css', ['css-responsive']);
	gulp.watch('src/*.css', ['css-main']);

	gulp.watch('css/*.css', ['css']);

	gulp.watch('*.html', ['html']);
	gulp.watch('js/*.js', ['js']);
});