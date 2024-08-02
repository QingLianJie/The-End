import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '清廉街',
  lang: 'zh-CN',
  description: '好久不见。',
  srcDir: './src',
  head: [['link', { rel: 'icon', href: '/favicon.svg' }]],
  themeConfig: { aside: false, outline: false },
})
