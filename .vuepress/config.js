module.exports = {
    title: 'Yappy Bots',
    theme: 'yuu',
    base: '/',
    themeConfig: {
        logo: '/icon.svg',
        lastUpdated: 'Last Updated',
        docsDir: 'docs',
        search: false,
        editLinks: true,
        nextLinks: false,
        prevLinks: false,
        smoothScroll: true,
        yuu: {
            defaultDarkTheme: true,
            colorThemes: [],
            disableThemeIgnore: true,
        },
        nav: [
            { text: 'Git', link: 'https://github.com/YappyBots' },
            { text: 'Sponsor', link: 'https://github.com/sponsors/datitisev' },
        ],
        sidebar: [
            {
                title: 'GitHub',
                collapsable: false,
                children: ['/docs/github/', '/docs/github/contributing'],
            },
            {
                title: 'GitLab',
                collapsable: false,
                children: ['/docs/gitlab/'],
            }
        ]
    },
    head: [
        ['link', { rel: 'icon', href: '/icon.svg' }]
    ],
    plugins: ['@vuepress/active-header-links'],
};