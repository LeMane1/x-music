'use client'

import {Box, Container, IconButton, Stack, Typography} from "@mui/material";
import {useRef} from "react";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import {changePlaying} from "@/lib/slices/audioPlayerSlice";
import TrackImage from "@/shared/TrackImage";
import AudioPlayerWrapper from "@/components/audio-player/ui/AudioPlayerWrapper";

export default function AudioPlayer() {
  const dispatch = useAppDispatch();
  const {audioUrl, trackImageUrl, trackName} = useAppSelector(state => state.audioPlayerReducer.playerTrack);
  const isPlaying = useAppSelector(state => state.audioPlayerReducer.isPlaying)
  
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
            <Stack direction='row'>
              <audio
                ref={audioRef}
                src={audioUrl}
                preload="auto"
                onPlay={() => dispatch(changePlaying())}
                onPause={() => dispatch(changePlaying())}
              />
              
              <TrackImage imageUrl={trackImageUrl} trackName={trackName} size={40}/>
              
              <IconButton onClick={togglePlayback}>
                {isPlaying ? <PauseIcon/> : <PlayArrowIcon/>}
              </IconButton>
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