'use client'

import {Container, IconButton, Stack, Typography} from "@mui/material";
import {useRef} from "react";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import {changePlaying} from "@/lib/slices/audioPlayerSlice";
import TrackImage from "@/shared/TrackImage";
import AudioPlayerWrapper from "@/components/audio-player/ui/AudioPlayerWrapper";
import FastRewindIcon from '@mui/icons-material/FastRewind';
import FastForwardIcon from '@mui/icons-material/FastForward';
import PlaybackProgressBar from "@/components/audio-player/ui/PlaybackProgressBar";
import VolumeSlider from "@/components/audio-player/ui/VolumeSlider";

export default function AudioPlayer() {
  const dispatch = useAppDispatch();
  const {audioUrl, trackImageUrl, trackName, trackDuration, trackArtistName} = useAppSelector(state => state.audioPlayerReducer.playerTrack);
  const {isPlaying} = useAppSelector(state => state.audioPlayerReducer)
  
  const audioRef = useRef<HTMLAudioElement | null>(null)
  
  const togglePlayback = () => {
    if (!audioRef.current) return
    
    if (audioRef.current.paused) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }
  
  return (
    <AudioPlayerWrapper>
      {
        audioUrl ?
          <Container disableGutters>
            <audio
              ref={audioRef}
              src={audioUrl}
              preload="auto"
              onPlay={() => dispatch(changePlaying())}
              onPause={() => dispatch(changePlaying())}
            />
            <Stack
              direction='row'
              alignItems='center'
              spacing={1}
            >
              
              <TrackImage imageUrl={trackImageUrl} trackName={trackName} size={40}/>
              
              <Stack direction='column'>
                <Typography variant='subtitle1' component='h6'>
                  {trackName}
                </Typography>
                
                <Typography variant='caption' component='span' color='textSecondary'>
                  {trackArtistName}
                </Typography>
              </Stack>
              
              <Stack direction='row'>
                <IconButton>
                  <FastRewindIcon/>
                </IconButton>
                
                <IconButton onClick={togglePlayback}>
                  {isPlaying ? <PauseIcon/> : <PlayArrowIcon/>}
                </IconButton>
                
                <IconButton>
                  <FastForwardIcon/>
                </IconButton>
              </Stack>
              
              <PlaybackProgressBar audioRef={audioRef}/>
              
              <VolumeSlider audioRef={audioRef}/>
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