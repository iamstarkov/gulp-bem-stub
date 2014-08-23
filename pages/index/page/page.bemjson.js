module.exports = {
    block: 'page',
    content: [
        {
            elem: 'head',
            content: [
                { block: 'meta', attrs: { charset: 'utf-8' }},
                { block: 'meta', attrs: { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' }},
                {
                    elem: 'title',
                    content: 'Gulp BEM is awesome!',
                },
                { block: 'meta', attrs: { name: 'description', content: '' }},
                { block: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' }},
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
