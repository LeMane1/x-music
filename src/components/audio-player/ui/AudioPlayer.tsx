'use client'

import {Container, Stack, Typography} from "@mui/material";
import {useEffect, useRef} from "react";
import {useAppDispatch, useAppSelector} from "@/lib/hooks/storeHooks";
import {changePlaying} from "@/lib/slices/audioPlayerSlice";
import TrackImage from "@/shared/TrackImage";
import AudioPlayerWrapper from "@/components/audio-player/ui/AudioPlayerWrapper";
import PlaybackProgressBar from "@/components/audio-player/ui/PlaybackProgressBar";
import VolumeSlider from "@/components/audio-player/ui/VolumeSlider";
import ControlsButtons from "@/components/audio-player/ui/ControlsButtons";
import {useBreakpoint} from "@/lib/hooks/useBreakpoint";

export default function AudioPlayer() {
  const dispatch = useAppDispatch();
  const {audioUrl, trackImageUrl, trackName, trackArtistName} = useAppSelector(state => state.audioPlayerReducer.playerTrack);
  const {isPlaying} = useAppSelector(state => state.audioPlayerReducer)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const isMdSize = useBreakpoint('md')
  
  useEffect(() => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);
  
  useEffect(() => {
    dispatch(changePlaying(true))
  }, [audioUrl]);
  
  return (
    <AudioPlayerWrapper>
      {
        audioUrl ?
          <Container disableGutters>
            <audio
              ref={audioRef}
              src={audioUrl}
              preload="auto"
            />
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
          :
          <Typography variant='subtitle1' color='textSecondary'>
            Track is not selected
          </Typography>
      }
    </AudioPlayerWrapper>
  )
}