import { extendTheme } from '@mui/joy/styles'

const fonts =
  'Inter Variable, Inter, HarmonyOS Sans SC, MiSans, Source Han Sans SC, Noto Sans SC, var(--joy-fontFamily-fallback)'

const theme = extendTheme({
  fontFamily: { display: fonts, body: fonts },
  components: {},
})

export default theme
