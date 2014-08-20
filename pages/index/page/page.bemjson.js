module.exports = {
    block: 'page',
    content: [
        {
            block: 'head',
            tag: 'head',
            content: [
                {
                    block: 'title',
                    tag: 'title',
                    content: 'Gulp BEM is awesome!',
                },
                {
                    block: 'css',
                    tag: 'link',
                    attrs: { href: 'index.css', rel: 'stylesheet' }
                }
            ]
        },
        {
            block: 'body',
            tag: 'body',
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
                },
                {
                    block: 'js',
                    tag: 'script',
                    attrs: { src: 'index.js' }
                }
            ]
        }
    ]
};
