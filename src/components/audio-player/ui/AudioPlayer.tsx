'use client'

import {Container, Stack, Typography, Box} from "@mui/material";
import {useRef} from "react";
import {useAppSelector} from "@/lib/hooks/storeHooks";
import TrackImage from "@/shared/TrackImage";
import AudioPlayerWrapper from "@/components/audio-player/ui/AudioPlayerWrapper";
import PlaybackProgressBar from "@/components/audio-player/ui/PlaybackProgressBar";
import VolumeSlider from "@/components/audio-player/ui/VolumeSlider";
import ControlsButtons from "@/components/audio-player/ui/ControlsButtons";
import {useBreakpoint} from "@/lib/hooks/useBreakpoint";
import AudioController from "@/components/audio-player/ui/AudioController";

export default function AudioPlayer() {
  const {audioUrl, trackImageUrl, trackName, trackArtistName} = useAppSelector(state => state.audioPlayerReducer.playerTrack);
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const isMdSize = useBreakpoint('md')
  
  if (!audioUrl) return null;
  
  return (
    <AudioPlayerWrapper>
      {
        audioUrl &&
          <Container disableGutters>
            <Box
              component='audio'
              ref={audioRef}
              src={audioUrl}
              preload="auto"
            />
            
            <AudioController audioRef={audioRef}/>
            
            <Stack
              direction='row'
              alignItems='center'
              justifyContent={isMdSize ? 'flex-start' : 'space-between'}
              spacing={2}
            >
              <Stack direction='row' spacing={1} alignItems='center'>
                <TrackImage imageUrl={trackImageUrl} trackName={trackName} size={40}/>
                
                <Stack
                  direction='column'
                  sx={{
                    width: {
                      xs: 150,
                      sm: 200,
                      md: 280,
                      lg: 280,
                      xl: 280
                    },
                  }}
                >
                  <Typography variant='subtitle1' component='h6' noWrap>
                    {trackName}
                  </Typography>
                  
                  <Typography variant='caption' component='span' color='textSecondary' noWrap>
                    {trackArtistName}
                  </Typography>
                </Stack>
              </Stack>
              
              <ControlsButtons audioRef={audioRef}/>
              
              {isMdSize && <PlaybackProgressBar audioRef={audioRef}/>}
              
              {isMdSize && <VolumeSlider audioRef={audioRef}/>}
            </Stack>
          </Container>
      }
    </AudioPlayerWrapper>
  )
}