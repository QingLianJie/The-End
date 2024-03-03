import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '清廉街',
  description: '不是结束。',
  srcDir: 'src',
  head: [['link', { rel: 'icon', href: '/favicon.svg' }]],
  themeConfig: {
    logo: '/favicon.svg',
    nav: [
      { text: '历史', link: '/' },
      { text: '数据', link: '/download' },
      { text: '开发', link: '/developer' },
    ],
    sidebar: [
      {
        text: '历史',
        items: [
          { text: '写在前面', link: '/' },
          { text: '第一版', link: '/v1' },
          { text: '第二版', link: '/v2' },
          { text: '未完成的测试版', link: '/v3' },
          { text: '后来的故事', link: '/after-story' },
        ],
      },
      {
        text: '数据',
        items: [
          { text: '下载脱敏数据', link: '/download' },
          { text: '如何使用？', link: '/usage' },
          { text: '大家的作品', link: '/showcase' },
        ],
      },
      {
        text: '开发',
        items: [
          { text: '成为一名开发者', link: '/developer' },
          { text: '拥抱开源', link: '/open-source' },
        ],
      },
      {
        items: [
          { text: '清廉街 © 2024' },
          { text: '黑ICP备2021003925号-1', link: 'https://beian.miit.gov.cn/' },
        ],
      },
    ],
    search: { provider: 'local' },
    socialLinks: [{ icon: 'github', link: 'https://github.com/QingLianJie' }],
  },
})
