import { Header } from '@/components/Header'
import { Box } from '@mui/joy'
import * as React from 'react'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Box
      sx={{
        minHeight: '100vh',
      }}
    >
      <Header />
      <Box
        component="article"
        sx={{ width: '100%', maxWidth: '42rem', margin: '0 auto', p: 3.5 }}
      >
        {children}
      </Box>
    </Box>
  )
}
