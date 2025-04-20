'use client'

import {IconButton, Stack} from "@mui/material";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FastForwardIcon from "@mui/icons-material/FastForward";
import {changeCurrentTime, changeCurrentTrack, changePlaying} from "@/lib/slices/audioPlayerSlice";
import {useAppDispatch, useAppSelector} from "@/lib/hooks/storeHooks";
import {RefObject} from "react";

interface IControlsButtonsProps {
  audioRef: RefObject<HTMLAudioElement | null>;
  showFullControlsSet?: boolean;
}

export default function ControlsButtons({audioRef, showFullControlsSet = true}: IControlsButtonsProps) {
  const dispatch = useAppDispatch();
  const {isPlaying, currentTime} = useAppSelector(state => state.audioPlayerReducer)
  const tracks = useAppSelector(state => state.mainReducer.tracks)
  const trackId = useAppSelector(state => state.audioPlayerReducer.playerTrack.trackId)
  
  const togglePlayback = () => dispatch(changePlaying(!isPlaying))
  
  const handleBackwardTrack = () => {
    if (currentTime && audioRef.current){
      audioRef.current.currentTime = 0;
      dispatch(changeCurrentTime(0))
      return
    }
    
    const currentIndex = tracks.findIndex((track) => track.id === trackId)
    
    if (currentIndex > 0) {
      const prevTrack = tracks[currentIndex - 1];
      dispatch(changeCurrentTrack({
        trackId: prevTrack.id,
        trackName: prevTrack.name,
        trackArtistName: prevTrack.artist_name,
        trackImageUrl: prevTrack.image,
        trackDuration: prevTrack.duration,
        audioUrl: prevTrack.audio
      }))
    }else{
      dispatch(changePlaying(false))
    }
  }
  
  const handleForwardTrack = () => {
    const currentIndex = tracks.findIndex((track) => track.id === trackId)
    
    if (currentIndex < tracks.length - 1) {
      const nextTrack = tracks[currentIndex + 1];
      dispatch(changeCurrentTrack({
        trackId: nextTrack.id,
        trackName: nextTrack.name,
        trackArtistName: nextTrack.artist_name,
        trackImageUrl: nextTrack.image,
        trackDuration: nextTrack.duration,
        audioUrl: nextTrack.audio
      }))
    }else{
      dispatch(changePlaying(false))
    }
  }
  
  return (
    <Stack direction='row'>
      {showFullControlsSet && <IconButton onClick={handleBackwardTrack}>
        <FastRewindIcon/>
      </IconButton>}
      
      <IconButton onClick={togglePlayback}>
        {isPlaying ? <PauseIcon/> : <PlayArrowIcon/>}
      </IconButton>
      
      <IconButton onClick={handleForwardTrack}>
        <FastForwardIcon/>
      </IconButton>
    </Stack>
  )
}