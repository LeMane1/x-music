'use client'

import {Stack, SwipeableDrawer, Typography, Container, Fab, Box} from "@mui/material";
import TrackImage from "@/shared/TrackImage";
import {useAppDispatch, useAppSelector} from "@/lib/hooks/storeHooks";
import PlaybackProgressBar from "@/components/audio-player/ui/PlaybackProgressBar";
import {RefObject} from "react";
import ControlsButtons from "@/components/audio-player/ui/ControlsButtons";
import VolumeSlider from "@/components/audio-player/ui/VolumeSlider";
import {changeExpanded} from "@/lib/slices/audioPlayerSlice";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {useBreakpoint} from "@/lib/hooks/useBreakpoint";
import DownloadButton from "@/shared/DownloadButton";
import Puller from "@/shared/Puller";

interface IExpandedAudioPlayerProps {
  audioRef: RefObject<HTMLAudioElement | null>;
}

export default function ExpandedAudioPlayer({audioRef}: IExpandedAudioPlayerProps) {
  const dispatch = useAppDispatch();
  const {trackImageUrl, trackName, trackArtistName, trackDownloadUrl, isDownloadAllowed} = useAppSelector(state => state.audioPlayerReducer.playerTrack);
  const isExpanded = useAppSelector(state => state.audioPlayerReducer.isExpanded)
  const isSmSize = useBreakpoint('sm')
  
  const handleOnClose = () => dispatch(changeExpanded(false))
  
  return (
    <SwipeableDrawer
      anchor={'bottom'}
      open={isExpanded}
      onClose={handleOnClose}
      onOpen={() => {}}
      hideBackdrop
      slotProps={{
        'paper':{
          sx: {
            position: 'relative',
            height: '100vh',
            width: '100vw',
            maxWidth: '100vw',
            maxHeight: '100vh',
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.2)',
            backdropFilter: 'blur(30px)',
            padding: {
              'xs': 1,
              'sm': 2,
              'md': 4,
            }
          }
        },
      }}
    >
      <Container
        maxWidth="lg"
      >
        <Stack
          direction={'column'}
          alignItems={'center'}
          spacing={2}
          sx={{
            width: '100%',
          }}
        >
          <TrackImage
            imageUrl={trackImageUrl}
            trackName={trackName}
            sx={{
              width: {
                xs: '100%',
                sm: 300,
                md: 300,
                lg: 400,
              },
              height: {
                sm: 300,
                md: 300,
                lg: 400,
              },
              borderRadius: 3
            }}
          />
          
          <Stack
            direction={'column'}
            sx={{
              maxWidth: '100%',
              width: '100%',
            }}
          >
            <Typography
              component={'h4'}
              variant={'h4'}
              fontWeight={'bold'}
              noWrap
              textAlign={'center'}
              sx={{
                fontSize: {
                  'xs': '1.2rem',
                  'sm': '2rem',
                  'md': '3rem'
                },
              }}
            >
              {trackName}
            </Typography>
            
            <Typography
              component={'h6'}
              variant={'h6'}
              color={'textSecondary'}
              noWrap
              textAlign={'center'}
              sx={{
                fontSize: {
                  'xs': '1rem',
                  'sm': '1.3rem',
                  'md': '2rem'
                },
              }}
            >
              {trackArtistName}
            </Typography>
          </Stack>
          
          <PlaybackProgressBar audioRef={audioRef} sx={{flexGrow: 0, width: '100%'}} />
          
          <Stack sx={{
            width: '100%',
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <ControlsButtons
              audioRef={audioRef}
              sx={{
                transform: `scale(${isSmSize ? 2 : 1.3})`,
                transformOrigin: 'center center',
                height: isSmSize ? 100 : 40
              }}
            />
            
            <DownloadButton
              trackUrl={trackDownloadUrl}
              isTrackDownloadAllowed={isDownloadAllowed}
              sx={{
                position: 'absolute',
                right: 0,
              }}
            />
          </Stack>
          
          <VolumeSlider audioRef={audioRef} sx={{
            flexBasis: 0,
            width: {
              xs: '100%',
              sm: '50%',
              md: '30%',
            }
          }}/>
        </Stack>
        
        {isSmSize && <Fab
          onClick={handleOnClose}
          sx={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            backgroundColor: 'transparent',
            border: '1px solid white',
            '&:hover > svg':{
              color: 'black'
            }
          }}>
          <KeyboardArrowDownIcon color={'primary'}/>
        </Fab>}
        
        {
          !isSmSize &&
          <Box sx={{
            position: 'absolute',
            top: 16,
            left: 0,
            width: '100%',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <Puller/>
          </Box>
        }
      </Container>
    </SwipeableDrawer>
  )
}