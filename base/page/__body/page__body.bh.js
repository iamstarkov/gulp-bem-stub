module.exports = function(bh) {
    bh.match('page__body', function(ctx, json) {
        ctx.tag('body').cls(json.class);
    });
};
