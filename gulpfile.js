var gulp = require('gulp');
var bem = require('gulp-bem');
var bh = require('gulp-bh');
var concat = require('gulp-concat');
var del = require('del');
var debug = require('gulp-bem-debug');
var argv = require('yargs').alias('d', 'debug').boolean('d').argv;

var levels = [
    'blocks',
    'pages/index'
];

gulp.task('build', ['clean'], function () {
    var tree = bem.objects(levels).pipe(bem.tree());
    var deps = tree.deps('pages/index/page');

    if (argv.debug) { deps.pipe(debug()); }

    deps.src('{bem}.css')
        .pipe(concat('index.css'))
        .pipe(gulp.dest('./dist'));

    deps.src('{bem}.bh.js')
        .pipe(bh(require('./pages/index/page/page.bemjson.js'), 'index.html'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('clean', function (cb) {
    del(['./dist'], cb);
});

gulp.task('watch', ['build'], function() {
    return gulp.watch(['**/*.css', '**/*.bemjson.js'], ['build']);
});


gulp.task('default', ['build']);
