module.exports = {
    title: 'Yappy Bots',
    theme: 'yuu',
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
                children: ['/github/', '/github/contributing'],
            },
            {
                title: 'GitLab',
                collapsable: false,
                children: ['/gitlab/'],
            }
        ]
    },
    head: [
        ['link', { rel: 'icon', href: '/icon.svg' }]
    ],
    plugins: ['@vuepress/active-header-links', [
        '@vuepress/pwa',
        {
            serviceWorker: true,
            updatePopup: true
        }
    ]],
};