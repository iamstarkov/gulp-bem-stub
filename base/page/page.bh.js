module.exports = function(bh) {
    bh.match('page', function(ctx, json) {
        ctx.tag('html').cls(json.class);

        return [
            json.doctype || '<!DOCTYPE html>',
            ctx.json()
        ];
    });
};
