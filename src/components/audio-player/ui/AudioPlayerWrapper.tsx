'use client'

import {Box, Container} from "@mui/material";

interface IAudioPlayerWrapperProps {
  children?: React.ReactNode;
}

export default function AudioPlayerWrapper({children}: IAudioPlayerWrapperProps) {
  return (
    <Box sx={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      height: 60,
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: "rgba(115,115,115,0.2)",
      backdropFilter: 'blur(20px)',
    }}>
      <Container
        maxWidth='lg'
        sx={{
          
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
      }}>
        {children}
      </Container>
    </Box>
  )
}