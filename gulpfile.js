var gulp = require('gulp');
var bem = require('gulp-bem');
var concat = require('gulp-concat');

var levels = [
    'static/desktop.blocks',
    'static/desktop.bundles'
];

gulp.task('build', function () {
    var tree = bem.blocks('static', levels).pipe(bem.tree());
    var deps = tree.deps('desktop.bundles/index');

    deps.src('{block}.css')
        .pipe(concat('index.css'))
        .pipe(gulp.dest('./dist'));

    deps.src('{block}.js')
        .pipe(concat('index.js'))
        .pipe(gulp.dest('./dist'));
});
