import { Box, Stack } from '@mui/joy'
import logo from '../public/logo-code.svg'
import Image from 'next/image'

export const Header = () => {
  return (
    <Box component="header" sx={{ padding: 3.5, gap: 2 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack
          direction="row"
          sx={{
            filter: 'drop-shadow(0 0.5rem 1rem #00000024)',
            pointerEvents: 'none',
            userSelect: 'none',
            flex: 1,
          }}
        >
          <Image src={logo} alt="Logo" width={48} height={48} />
        </Stack>
        <Stack direction="row"></Stack>
        <Stack direction="row"></Stack>
      </Stack>
    </Box>
  )
}
