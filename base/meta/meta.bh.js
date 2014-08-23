module.exports = function (bh) {
    bh.match('meta', function (ctx) {
        ctx.tag('meta');
    });
};
