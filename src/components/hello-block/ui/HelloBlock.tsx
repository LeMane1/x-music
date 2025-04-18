import {Box, Button, Stack, Typography, Grid} from "@mui/material";

export default function HelloBlock() {
  return (
    <Grid
      container spacing={2}
      padding={{
        xs: 3,
        sm: 4,
        md: 5,
        lg: 5,
        xl: 5,
      }}
      sx={{
        width: "100%",
        backgroundColor: 'rgba(213,213,213,0.05)',
        borderRadius: 2
      }}
    >
      <Grid size={{ xs: 12, sm: 12, md: 6 }}>
        <Stack direction={'column'} spacing={2}>
          <Stack direction={'column'} gap={1}>
            <Typography
              variant='h2'
              component='h2'
              fontWeight='bold'
              lineHeight={0.9}
              sx={{
                fontSize: {
                  xs: '2rem',
                  sm: '2rem',
                  md: '3rem',
                  lg: '4rem',
                  xl: '4rem',
                },
              }}
            >
              Search{' '}
              <Box
                component='span'
                sx={{
                  background: 'linear-gradient(15deg, #8D15D3 20%, #DB1E1E 66%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline',
                }}>
                free{' '}
              </Box>
              music
            </Typography>
            
            <Typography variant='body1' component='span' color={'textSecondary'}>
              A place where you can find music depending your feel and mood. Jamendo API provides thousands of tracks for you.
            </Typography>
          </Stack>
          
          <Button variant='contained' color='primary' size={'large'} sx={{
            width: 'fit-content',
          }}>
            Start search music
          </Button>
        </Stack>
      </Grid>
      <Grid size={{ xs: 12, sm: 12, md: 6}}>
        <Box
          component='img'
          src={'/images/abstract-shape.avif'}
          alt={'Abstract shape'}
          sx={{
            width: '100%',
            height: {
              xs: 200,
              sm: 200,
              md: 300,
              lg: 300,
              xl: 300,
            },
            objectFit: 'cover',
            borderRadius: 3,
            boxShadow: 5
          }}
        />
      </Grid>
    </Grid>
  )
}