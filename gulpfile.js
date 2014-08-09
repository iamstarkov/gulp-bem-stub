var gulp = require('gulp');
var bem = require('gulp-bem')

var pjoin = require('path').join;
var paths = {
	pages: 'desktop.bundles'
}

var levels = [
	'static/libs/bem-core',
	'static/libs/bem-components',
	'static/desktop.blocks'
];

gulp.task('build', function () {
	gulp.src('static/**/*.deps.js')
		.pipe(depsGraph(levels))
		.pipe(depsByPage(pjoin(pages, 'index'))
		.pipe(fork(
			bem.css('[BEM].css')
				.pipe(concat())
				.dest('[BUNDLE].css'),
			bem.js('[BEM].js')
				.pipe(concat())
				.dest('[BUNDLE].js'),
		))
});
