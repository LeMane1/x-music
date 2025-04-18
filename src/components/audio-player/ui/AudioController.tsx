'use client'

import {RefObject, useEffect} from "react";
import {changeCurrentTime, changeCurrentTrack, changePlaying} from "@/lib/slices/audioPlayerSlice";
import {useAppDispatch, useAppSelector} from "@/lib/hooks/storeHooks";

interface IAudioControllerProps {
  audioRef: RefObject<HTMLAudioElement | null>;
}

export default function AudioController({audioRef}: IAudioControllerProps) {
  const dispatch = useAppDispatch();
  const {isPlaying, currentTime} = useAppSelector(state => state.audioPlayerReducer)
  const {trackDuration, trackId, audioUrl} = useAppSelector(state => state.audioPlayerReducer.playerTrack)
  const tracks = useAppSelector(state => state.mainReducer.tracks)
  
  // Set to next track after listening current
  useEffect(() => {
    if (currentTime >= trackDuration){
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
  }, [currentTime, trackDuration]);
  
  // Update 1 time per second current track time
  useEffect(() => {
    let intervalId: number = 0
    if (isPlaying){
      intervalId = window.setInterval(() => {
        dispatch(changeCurrentTime(Math.round(audioRef?.current?.currentTime ?? 0)))
      }, 1000)
    }
    return () => {
      clearInterval(intervalId)
    }
  }, [isPlaying])
  
  // Control of play/pause to store
  useEffect(() => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);
  
  // Auto start after click to track
  useEffect(() => {
    dispatch(changePlaying(true))
  }, [audioUrl]);
  
  return (
    <>
    </>
  )
}