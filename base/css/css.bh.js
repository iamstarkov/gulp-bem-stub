module.exports = function(bh) {
    bh.match('css', function(ctx, json) {

        ctx.bem(false);

        if (json.url) {
            ctx
                .tag('link')
                .attr('rel', 'stylesheet')
                .attr('href', json.url);
        } else {
            ctx.tag('style');
        }

    });
};
