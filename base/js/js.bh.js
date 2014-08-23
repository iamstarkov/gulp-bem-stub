module.exports = function (bh) {
    bh.match('js', function (ctx, json) {
        ctx.tag('script').attr('src', json.url);
    });
};
