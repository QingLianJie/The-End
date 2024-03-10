import { defineConfig } from 'vitepress'

const links = [
  {
    text: '前言',
    items: [{ text: '清廉街不再维护', link: '/' }],
  },
  {
    text: '数据',
    items: [
      { text: '下载数据', link: '/数据/下载数据' },
      { text: '如何使用', link: '/数据/如何使用' },
    ],
  },
  {
    text: '历史',
    items: [
      { text: '第一版', link: '/历史/第一版' },
      { text: '第二版', link: '/历史/第二版' },
      { text: '未完成的测试版', link: '/历史/未完成的测试版' },
      { text: '这个网站', link: '/历史/这个网站' },
    ],
  },

  {
    text: '开发',
    items: [
      { text: '成为一名开发者', link: '/开发/成为一名开发者' },
      { text: '拥抱开源', link: '/开发/拥抱开源' },
    ],
  },
]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '清廉街',
  lang: 'zh-CN',
  description: '不是结束。',
  srcDir: './src',
  head: [['link', { rel: 'icon', href: '/favicon.svg' }]],
  markdown: { image: { lazyLoading: true } },
  themeConfig: {
    logo: '/favicon.svg',
    sidebar: [
      ...links,
      {
        text: '其他',
        items: [
          { text: '清廉街 © 2024' },
          { text: '黑ICP备2021003925号-1', link: 'https://beian.miit.gov.cn/' },
        ],
      },
    ],
    nav: [...links],
    search: { provider: 'local' },
    socialLinks: [{ icon: 'github', link: 'https://github.com/QingLianJie' }],
  },
})
