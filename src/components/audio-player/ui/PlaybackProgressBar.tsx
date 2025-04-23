'use client'

import {changeCurrentTime} from "@/lib/slices/audioPlayerSlice";
import {Box, Slider, SxProps, Typography} from "@mui/material";
import {useAppDispatch, useAppSelector} from "@/lib/hooks/storeHooks";
import {RefObject} from "react";
import {getDurationString} from "@/lib/functions/getDurationString";

interface IPlaybackProgressBarProps {
  audioRef: RefObject<HTMLAudioElement | null>;
  sx?: SxProps;
}

export default function PlaybackProgressBar({audioRef, sx}: IPlaybackProgressBarProps) {
  const dispatch = useAppDispatch();
  const {trackDuration} = useAppSelector(state => state.audioPlayerReducer.playerTrack);
  const {currentTime} = useAppSelector(state => state.audioPlayerReducer)
  
  const handleOnChange = (_: unknown, value: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value;
      dispatch(changeCurrentTime(value));
    }
  }
  
  return (
    <Box sx={{
      flexGrow: 1,
      display: 'flex',
      alignItems: 'center',
      gap: 1,
      ...sx
    }}>
      <Typography
        variant='caption'
        color='textSecondary'
        sx={{
          flexShrink: 0
        }}
      >
        {getDurationString(currentTime)}
      </Typography>
      
      <Slider
        aria-label="Playback progress bar"
        valueLabelDisplay='off'
        value={currentTime}
        min={0}
        step={1}
        max={trackDuration}
        onChange={handleOnChange}
        sx={{
          '& .MuiSlider-thumb': {
            width: 12,
            height: 12,
            transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
            '&::before': {
              boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
            },
            '&:hover, &.Mui-focusVisible': {
              boxShadow: `0px 0px 0px 8px ${'rgba(99,99,99,0.16)'}`,
            },
            '&.Mui-active': {
              width: 20,
              height: 20,
            },
          },
          '& .MuiSlider-rail': {
            opacity: 0.28,
          },
        }}
      />
      
      <Typography
        variant='caption'
        color='textSecondary'
        noWrap
        sx={{
          flexShrink: 0
        }}
      >
        {`– ${getDurationString(trackDuration - currentTime)}`}
      </Typography>
    </Box>
  )
}