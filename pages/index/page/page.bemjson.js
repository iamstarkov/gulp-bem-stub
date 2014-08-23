module.exports = {
    block: 'page',
    content: [
        {
            elem: 'head',
            content: [
                {
                    elem: 'title',
                    content: 'Gulp BEM is awesome!',
                },
                { block: 'css', url: 'index.css' }
            ]
        },
        {
            elem: 'body',
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
                { block: 'js', url: 'index.js' }
            ]
        }
    ]
};
