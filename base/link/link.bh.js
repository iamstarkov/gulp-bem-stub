module.exports = function (bh) {
    bh.match('link', function (ctx, json) {
        ctx.tag('a')
            .attr('href', json.url)
            .attr('title', json.title);
    });
};
