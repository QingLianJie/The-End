import ColorMode from '@/components/theme/ColorMode'
import ThemeRegistry from '@/components/theme/ThemeRegistry'
import { Box } from '@mui/joy'
import type { Metadata } from 'next'
import * as React from 'react'

export const metadata: Metadata = {
  title: '清廉街 Playground',
  description: '希望这个网站可以帮到大家，欢迎来贡献代码。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-hans" data-joy-color-scheme="light">
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body>
        <ColorMode />
        <ThemeRegistry>
          <Box
            sx={{
              display: 'flex',
              flex: 1,
              flexDirection: 'column',
              p: 2,
              gap: 1,
              height: '100vh',
            }}
          >
            {children}
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  )
}
