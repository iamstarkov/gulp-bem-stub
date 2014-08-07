var gulp = require('gulp');

var dest = 'dist';
var bundle = 'desktop.bundles/beta';

var levels = [
	'static/libs/bem-core',
	'static/libs/bem-components',
	'static/desktop.blocks'
];

gulp.task('decl', function () {
	var decl = bundle + '/' + '*.bemdecl.js';
	gulp.src(decls)
		.pipe(readDecl())
		.pipe(readBlocks())
		.pipe(flatten())

});

gulp.task('build', function () {

});
