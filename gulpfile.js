var gulp = require('gulp');
var bem = require('gulp-bem');
var concat = require('gulp-concat');

var levels = [
    // bem-core
    'static/libs/bem-core/common.blocks',
    'static/libs/bem-core/desktop.blocks',
    // bem-components
    'static/libs/bem-components/common.blocks',
    'static/libs/bem-components/desktop.blocks',
    // local
    'static/desktop.blocks',
    'static/desktop.bundles/index/blocks'
];

gulp.task('build', function () {
    var tree = bem.blocks(levels).pipe(bem.tree());
    var deps = tree.deps('desktop.bundles/index/blocks/sepulka');

    deps.src('{block}.css')
        .pipe(concat('index.css'))
        .pipe(gulp.dest('./dist'));

    deps.src('{block}.js')
        .pipe(concat('index.js'))
        .pipe(gulp.dest('./dist'));
});
