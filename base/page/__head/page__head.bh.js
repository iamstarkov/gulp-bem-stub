module.exports = function(bh) {
    bh.match('page__head', function(ctx) {
        ctx.tag('head');
    });
};
