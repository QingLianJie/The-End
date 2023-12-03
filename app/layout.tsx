import type { Metadata } from 'next'
import ThemeRegistry from '@/components/theme/ThemeRegistry'

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
    <html lang="zh-hans">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  )
}
