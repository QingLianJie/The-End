// .vitepress/theme/index.js
import { useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { watch } from 'vue'
import './custom.css'

export default {
  ...DefaultTheme,

  setup() {
    const route = useRoute()
    watch(() => route.path)
  },
}
