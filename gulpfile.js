var gulp = require('gulp');
var bem = require('gulp-bem');

var join = require('path').join;
var concat = require('gulp-concat');

var levels = [
    'static/libs/bem-core',
    'static/libs/bem-components',
    'static/desktop.blocks',
    'static/desktop.bundles'
];

function allDeps(level) { return join(level, '**/*.deps.js'); }

gulp.task('build', function () {
    var tree = gulp.src(levels.map(allDeps)).pipe(bem.tree());
    var deps = tree.deps('static/desktop.bundles/index');

    deps.src('{block}.css')
        .pipe(concat('index.css'))
        .pipe(gulp.dest('./dist'));

    deps.src('{block}.js')
        .pipe(concat('index.js'))
        .pipe(gulp.dest('./dist'));
});
