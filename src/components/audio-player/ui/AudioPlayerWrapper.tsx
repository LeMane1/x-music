'use client'

import {useMediaQuery} from "@mui/system";
import {Box, Container} from "@mui/material";
import theme from "@/styles/theme";

interface IAudioPlayerWrapperProps {
  children?: React.ReactNode;
}

export default function AudioPlayerWrapper({children}: IAudioPlayerWrapperProps) {
  const isLgSize = useMediaQuery(theme.breakpoints.up('lg'));
  
  return (
    <Box sx={{
      position: 'fixed',
      bottom: isLgSize ? 16 : 0,
      left: 0,
      width: '100%',
      height: 60,
      display: 'flex',
      justifyContent: 'center',
    }}>
      <Container
        maxWidth='lg'
        sx={{
          backgroundColor: "rgba(115,115,115,0.2)",
          backdropFilter: 'blur(20px)',
          borderRadius: isLgSize ? 2 : 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
      }}>
        {children}
      </Container>
    </Box>
  )
}