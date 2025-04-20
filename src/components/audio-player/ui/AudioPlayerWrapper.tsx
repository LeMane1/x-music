'use client'

import {Box, Container} from "@mui/material";
import {useMediaQuery} from "@mui/system";
import theme from "@/styles/theme";

interface IAudioPlayerWrapperProps {
  children?: React.ReactNode;
}

export default function AudioPlayerWrapper({children}: IAudioPlayerWrapperProps) {
  const isLgSize = useMediaQuery(theme.breakpoints.up("lg"));
  
  return (
    <Box sx={{
      position: 'fixed',
      bottom: 12,
      paddingLeft: isLgSize ? 0 : 2,
      paddingRight: isLgSize ? 0 : 2,
      left: 0,
      width: '100%',
      height: 60,
      display: 'flex',
      justifyContent: 'center',
    }}>
      <Container
        maxWidth='lg'
        sx={{
          borderRadius: 2,
          backgroundColor: "rgba(115,115,115,0.2)",
          backdropFilter: 'blur(20px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
      }}>
        {children}
      </Container>
    </Box>
  )
}