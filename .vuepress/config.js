module.exports = {
    title: '桃之夭夭 灼灼其华',
    description: "这个适用于多项目或者博客，展示多目录多文件",
    base: '/vuepress/',
    // meta标签
    head: [
        ['link', {
            rel: 'icon',
            href: `/favicon.ico`
        }]
    ],
    // dev端口
    port: 8080,
    dest: '.vuepress/dist',
    // Google AnalyticsID流量统计
    ga: undefined,
    // 做成pwa才开这个选项
    // 如果设置为 true，VuePress 将自动生成并注册一个 service worker ，这个 worker 将内容缓存以供离线使用（仅在生产环境中启用）
    serviceWorker: false,
    // 主题
    theme: undefined,
    themeConfig: {
        sidebarDepth: 2,
        // 导航链接
        nav: [{
            text: 'Home',
            link: '/'
        }, {
            text: 'Code',
            link: '/code/'
        }, {
            text: 'Life',
            link: '/life/'
        }, {
            text: 'External',
            link: 'https://www.dongdavid.com'
        }, {
            text: 'github',
            // 这里是下拉列表展现形式。
            items: [{
                text: 'home-page',
                link: 'https://www.dongdavid.com'
            }, {
                text: 'this project',
                link: 'https://github.com/dongdavid/vuepress'
            }, ]
        }],
        // 侧边栏
        sidebar: {
            // 侧边栏在 /foo/ 上
            '/life/': ['','Mac使用技巧','腾讯云直播计费标准'],
            // 侧边栏在 /bar/ 上
            '/code/': ['Git','docker命令','sublime','Mysql','git操作','vscode使用技巧','linux','布局例子','docker','mac下php添加扩展']
            //['', '布局例子', 'linux', 'git操作']
        },
        // 分组侧边栏
        // sidebar: [{
        //     title: 'Group 1',
        //     collapsable: true,
        //     children: ['/', '/life/aa', '/life/pp']
        // }, {
        //     title: 'Group 2',
        //     collapsable: true,
        //     children: ['/aa', '/pp']
        // }]
        repo: 'dongdavid/vuepress',
        // 如果你的文档不在仓库的根部
        docsDir: '',
        // 可选，默认为 master
        docsBranch: 'master',
        // 默认为 true，设置为 false 来禁用
        editLinks: true,
    },
    // markdown:{
    //  slugify:undefined,
    //  anchor:{ permalink: true, permalinkBefore: true, permalinkSymbol: '#' },
    //  toc:{ includeLevel: [2, 3] },
    //  config:undefined,
    // },
    // postcss:{ plugins: [require('autoprefixer')] },
    // configureWebpack: {
    //  resolve: {
    //      alias: {
    //          '@alias': 'path/to/some/dir'
    //      }
    //  }
    // }
    chainWebpack: (config, isServer) => {
        // config is an instance of ChainableConfig
    },
    evergreen: true,
}
