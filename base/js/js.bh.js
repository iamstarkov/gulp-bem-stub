module.exports = function (bh) {
    bh.match('js', function (ctx, json) {
        ctx.bem(false).tag('script');

        if (json.url) {
            ctx.attr('src', json.url);
        }
    });
};
