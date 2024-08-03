import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '清廉街',
  lang: 'zh-CN',
  description: '好久不见。',
  srcDir: './src',
  head: [['link', { rel: 'icon', href: '/favicon.svg' }]],
  themeConfig: {
    logo: '/favicon.svg',
    socialLinks: [{ icon: 'github', link: 'https://github.com/QingLianJie' }],
    returnToTopLabel: '回到顶部',
    darkModeSwitchLabel: '切换亮色/暗色主题',
    aside: false,
    outline: false,
  },
})
