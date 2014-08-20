module.exports = {
    block: 'page',
    title: 'Gulp BEM is awesome!',
    head: [
        { elem: 'css', url: 'index.css' }
    ],
    scripts: [{ elem: 'js', url: 'index.js' }],
    content: [
        { block: 'logo' },
        {
            block: 'menu',
            content: ['overview', 'examples', 'docs', 'bem'].map(function (item) {
                return {
                    elem: 'item',
                    content: {
                        block: 'link',
                        tag: 'a',
                        attrs: {
                            href: '#' + item
                        },
                        content: item
                    }
                };
            })
        }
    ]
};
