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
                { block: 'meta', attrs: { name: 'keywords', content: '' }},
                { block: 'meta', attrs: { name: 'description', content: '' }},

                { block: 'metalink', url: '/favicon.ico', attrs: { rel: 'icon', type: 'image/x-icon' }},
                { block: 'metalink', url: '/favicon.ico', attrs: { rel: 'shortcut icon', type: 'image/x-icon' }},

                { block: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' }},
                { block: 'css', url: 'index.css' }
            ]
        },
        {
            elem: 'body',
            content: {
                block: 'grid',
                content: [
                    {
                        elem: 'row',
                        content: [
                            {
                                elem: 'cell-xs',
                                mods: { size: 12 },
                                content: {
                                    block: 'heading',
                                    mods: { level: 1 },
                                    mix: [{ block: 'tagline' }],
                                    content: 'Welcome to gulp-bem-stub!'
                                }
                            },
                            {
                                elem: 'cell-xs',
                                mods: { size: 12 },
                                content: {
                                    block: 'logo',
                                    content: [
                                        {
                                            block: 'image',
                                            mix: [{ block: 'logo', elem: 'bem' }],
                                            url: 'http://getbem.com/img/b.svg'
                                        },
                                        {
                                            block: 'image',
                                            mix: [{ block: 'logo', elem: 'gulp' }],
                                            url: 'https://raw2.github.com/gulpjs/artwork/master/gulp-2x.png'
                                        }
                                    ]
                                }
                            },
                            {
                                elem: 'cell-xs',
                                mods: { size: 12 },
                                content: {
                                    block: 'heading',
                                    mods: { level: 2 },
                                    mix: [{ block: 'tagline' }],
                                    content: 'What happens when two powerful technologies meet each other? Awesomness!'
                                }
                            }
                        ]
                    }
                ]
            }
        }
    ]
};
