({
    block: 'page',
    title: 'gulp BEM stub',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: 'gulp all the bem' }},
        { elem: 'css', url: '_index.css' }
    ],
    scripts: [{ elem: 'js', url: '_index.js' }],
    content: [
        {
            block: 'header',
            content: [
                {
                    block: 'logo',
                    content: [
                        {
                            block: 'image'
                            mods: { type: 'gulp-bem' }
                        },
                        'gulp BEM stub'
                    ]
                }
            ]
        },
        {
            block: 'content',
            content: [
                {
                    block: 'menu',
                    content: [
                        { title: 'about', url: '#about' },
                        { title: 'docs',  url: '#docs' },
                        { title: 'other', url: '#other' }
                    ].map(function(item) {
                        return {
                            block: 'menu-item',
                            content: {
                                block: 'link',
                                js: { item },
                                url: item.url,
                                content: item.title
                            }
                        };
                    })
                }
            ]
        }
    ]
})
