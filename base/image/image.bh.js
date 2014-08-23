module.exports = function (bh) {
    bh.match('image', function (ctx, json) {
        ctx.tag('img')
            .attr('src', json.url)
            .attr('alt', json.alt)
            .attr('width', json.width)
            .attr('height', json.height);
    });
};
