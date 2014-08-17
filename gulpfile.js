var gulp = require('gulp');
var bem = require('gulp-bem');
var concat = require('gulp-concat');

var levels = [
    // bem-core
    // 'libs/bem-core/common.blocks',
    // 'libs/bem-core/desktop.blocks',
    // bem-components
    // 'libs/bem-components/common.blocks',
    // 'libs/bem-components/desktop.blocks',
    // local
    'desktop.blocks',
    'desktop.bundles/index'
];

gulp.task('build', function () {
    var tree = bem.objects(levels).pipe(bem.tree());
    var deps = tree.deps('desktop.bundles/index/sepulka');

    return deps.src('{bem}.css')
        .pipe(concat('index.css'))
        .pipe(gulp.dest('./dist'));
});
