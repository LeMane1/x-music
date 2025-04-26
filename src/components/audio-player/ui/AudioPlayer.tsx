'use client'

import {Container, Stack, Typography, Box, SwipeableDrawer} from "@mui/material";
import {useRef} from "react";
import {useAppDispatch, useAppSelector} from "@/lib/hooks/storeHooks";
import TrackImage from "@/shared/TrackImage";
import AudioPlayerWrapper from "@/components/audio-player/ui/AudioPlayerWrapper";
import PlaybackProgressBar from "@/components/audio-player/ui/PlaybackProgressBar";
import VolumeSlider from "@/components/audio-player/ui/VolumeSlider";
import ControlsButtons from "@/components/audio-player/ui/ControlsButtons";
import {useBreakpoint} from "@/lib/hooks/useBreakpoint";
import AudioController from "@/components/audio-player/ui/AudioController";
import ExpandButton from "./ExpandButton";
import ExpandedAudioPlayer from "@/components/audio-player/ui/ExpandedAudioPlayer";
import {changeExpanded} from "@/lib/slices/audioPlayerSlice";

export default function AudioPlayer() {
  const dispatch = useAppDispatch();
  const {audioUrl, trackImageUrl, trackName, trackArtistName} = useAppSelector(state => state.audioPlayerReducer.playerTrack);
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const isExpanded = useAppSelector(state => state.audioPlayerReducer.isExpanded)
  const isMdSize = useBreakpoint('md')
  const isSmSize = useBreakpoint('sm')
  
  if (!audioUrl) return null;
  
  const handleOnPlayerClick = () => {
    if (!isSmSize && !isExpanded){
      dispatch(changeExpanded(true))
    }
  }
  
  return (
    <Box onClick={handleOnPlayerClick}>
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
              
              <ControlsButtons audioRef={audioRef} showFullControlsSet={isSmSize}/>
              
              {isMdSize && <PlaybackProgressBar audioRef={audioRef}/>}
              
              {isMdSize && <VolumeSlider audioRef={audioRef}/>}
              
              {isMdSize && <ExpandButton/>}
            </Stack>
            
            <ExpandedAudioPlayer audioRef={audioRef}/>
          </Container>
        }
      </AudioPlayerWrapper>
    </Box>
  )
}