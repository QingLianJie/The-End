// https://mui.com/joy-ui/integrations/next-js-app-router/
'use client'

import * as React from 'react'
import { CssVarsProvider } from '@mui/joy/styles'
import CssBaseline from '@mui/joy/CssBaseline'
import NextAppDirEmotionCacheProvider from './EmotionCache'
import theme from './theme'
import '@fontsource/inter'

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'joy' }}>
      <CssVarsProvider theme={theme}>
        <CssBaseline />
        {children}
      </CssVarsProvider>
    </NextAppDirEmotionCacheProvider>
  )
}
