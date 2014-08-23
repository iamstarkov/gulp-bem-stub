module.exports = function(bh) {
    bh.match('css', function(ctx, json) {

        ctx.tag('link')
            .attr('rel', 'stylesheet')
            .attr('href', json.url);

    });
};
