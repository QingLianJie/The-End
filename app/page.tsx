import { Header } from '@/components/Header'
import InfoRoundedIcon from '@mui/icons-material/InfoRounded'
import { Alert, Box, Card, CardContent, Grid, Link, Typography } from '@mui/joy'
import NextLink from 'next/link'
import { DOCS_SITE } from './const'

export default function Home() {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Header />
      <Box
        component="main"
        sx={{
          p: 3.5,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
        }}
      >
        <Grid container spacing={2} sx={{ flexGrow: 1, maxWidth: '42rem' }}>
          <Grid xs={12}>
            <Alert
              variant="outlined"
              color="neutral"
              startDecorator={<InfoRoundedIcon color="primary" />}
              endDecorator={
                <Link href={`${DOCS_SITE}/blog/hello-goodbye`} level="body-sm">
                  了解更多
                </Link>
              }
              sx={{ filter: 'drop-shadow(0 0.5rem 1rem #00000018)' }}
            >
              清廉街不再提供成绩和课表查询服务，并将脱敏数据开放给所有人使用。
            </Alert>
          </Grid>
          <Grid xs={12} sm={12} md={8}>
            <Card
              variant="outlined"
              sx={{ filter: 'drop-shadow(0 0.5rem 1rem #00000018)' }}
            >
              <CardContent>
                <Typography level="title-md">获取数据</Typography>
                <Typography level="body-xs">
                  下载脱敏后的课程和成绩数据库文件。
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={4}>
            <Card
              variant="outlined"
              sx={{ filter: 'drop-shadow(0 0.5rem 1rem #00000022)' }}
            >
              <CardContent>
                <Typography level="title-md">开源主页</Typography>
                <Typography level="body-xs"></Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
