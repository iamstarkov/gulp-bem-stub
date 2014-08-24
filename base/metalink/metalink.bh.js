module.exports = function (bh) {
    bh.match('metalink', function (ctx, json) {
        ctx.tag('link').attr('href', json.url);
    });
};
