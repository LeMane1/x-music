'use client'

import {Slider, Stack} from "@mui/material";
import VolumeUpRounded from '@mui/icons-material/VolumeUpRounded';
import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded';
import {RefObject} from "react";
import {changeCurrentVolume} from "@/lib/slices/audioPlayerSlice";
import {useAppDispatch, useAppSelector} from "@/lib/hooks/storeHooks";

interface IVolumeSliderProps {
  audioRef: RefObject<HTMLAudioElement | null>;
}

export default function VolumeSlider({audioRef}: IVolumeSliderProps) {
  const dispatch = useAppDispatch();
  const {currentVolume} = useAppSelector(state => state.audioPlayerReducer)
  
  const handleOnChange = (_: unknown, value: number) => {
    if (audioRef.current) {
      audioRef.current.volume = value;
      dispatch(changeCurrentVolume(value));
    }
  }
  
  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={0.5}
      sx={{
        flexBasis: 120,
    }}>
      <VolumeDownRounded sx={{
        opacity: .7
      }}/>
      <Slider
        aria-label="Volume"
        value={currentVolume}
        max={1}
        step={0.1}
        onChange={handleOnChange}
        sx={(t) => ({
          '& .MuiSlider-track': {
            border: 'none',
          },
          '& .MuiSlider-thumb': {
            width: 12,
            height: 12,
            backgroundColor: '#fff',
            '&::before': {
              boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
            },
            '&:hover, &.Mui-focusVisible, &.Mui-active': {
              boxShadow: 'none',
            },
          },
        })}
      />
      <VolumeUpRounded sx={{
        opacity: .7
      }}/>
    </Stack>
  )
}