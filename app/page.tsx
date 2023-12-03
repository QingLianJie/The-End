import { Box, Button, Typography } from '@mui/joy'

export default function Home() {
  return (
    <Box
      component="main"
      sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
      }}
    >
      <Typography level="h1">清廉街 Playground</Typography>
      <Button variant="solid" color="primary">
        Stay Tuned.
      </Button>
    </Box>
  )
}
