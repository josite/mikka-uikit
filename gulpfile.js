var gulp = require('gulp'),
	concatCss = require('gulp-concat-css'),
	gcmq = require('gulp-group-css-media-queries'),
	cleanCSS = require('gulp-clean-css'),
	livereload = require('gulp-livereload');
	zip = require('gulp-zip');


// Minified normalize file
gulp.task('css-normalize', function () {
	return gulp.src('docs/src/mikka-normalize.css')
	.pipe(concatCss('mikka-normalize.min.css'))
	.pipe(cleanCSS())
	.pipe(gulp.dest('docs/src/'))
	.pipe(livereload());
});


// Minified grid css file
gulp.task('css-grid', function () {
	return gulp.src('docs/src/mikka-grid.css')
	.pipe(concatCss('mikka-grid.min.css'))
	.pipe(cleanCSS())
	.pipe(gulp.dest('docs/src/'))
	.pipe(livereload());
});


// Minified responsive css file
gulp.task('css-responsive', function () {
	return gulp.src('docs/src/mikka-responsive.css')
	.pipe(concatCss('mikka-responsive.min.css'))
	.pipe(cleanCSS())
	.pipe(gulp.dest('docs/src/'))
	.pipe(livereload());
});


// Minified common css file
gulp.task('css-main', function () {
	return gulp.src([
						'docs/src/mikka-normalize.css',
						'docs/src/mikka-grid.css',
						'docs/src/mikka-responsive.css'
					])
	.pipe(concatCss("mikka-ui.min.css"))
	.pipe(gcmq())
	.pipe(cleanCSS())
	.pipe(gulp.dest('docs/src/'))
	.pipe(livereload());
});


// Create ZIP-file with src-files
gulp.task('zip', function () {
	return gulp.src('docs/src/*.min.css')
	.pipe(zip('mikka-ui-kit.zip'))
	.pipe(gulp.dest('dist/'))
});

// Livereload section -------------------------------------------------------
gulp.task('css', function () {
	return gulp.src('docs/css/*.css')
	.pipe(livereload());
});

gulp.task('html', function () {
	return gulp.src('docs/*.html')
	.pipe(livereload());
});

gulp.task('js', function () {
	return gulp.src('docs/js/*.js')
	.pipe(livereload());
});
// Livereload section -------------------------------------------------------


// Default
gulp.task('default', function () {
	livereload.listen();
	gulp.watch('docs/src/mikka-normalize.css', ['css-normalize']);
	gulp.watch('docs/src/mikka-grid.css', ['css-grid']);
	gulp.watch('docs/src/mikka-responsive.css', ['css-responsive']);
	gulp.watch('docs/src/*.css', ['css-main']);

	gulp.watch('docs/src/*.min.css', ['zip']);

	gulp.watch('docs/css/*.css', ['css']);

	gulp.watch('docs/*.html', ['html']);
	gulp.watch('docs/js/*.js', ['js']);
});