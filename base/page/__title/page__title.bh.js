module.exports = function(bh) {
    bh.match('page__title', function(ctx) {
        ctx.tag('title');
    });
};
