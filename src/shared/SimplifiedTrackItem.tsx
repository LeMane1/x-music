'use client'

import {Box, Divider, Stack, Typography} from "@mui/material";
import {ITrack} from "@/api/types";
import TrackImage from "@/shared/TrackImage";
import DurationLabel from "@/app/search/tracks-list/ui/DurationLabel";
import {useAppSelector} from "@/lib/hooks/storeHooks";

interface ISimplifiedTrackItemProps {
  track: ITrack;
  onClick: (track: ITrack) => void;
  children?: React.ReactNode;
}

export default function SimplifiedTrackItem({track, onClick, children}: ISimplifiedTrackItemProps) {
  const {trackId} = useAppSelector(state => state.audioPlayerReducer.playerTrack)
  const isPlaying = useAppSelector(state => state.audioPlayerReducer)
  
  return (
    <Box
      onClick={() => onClick(track)}
      borderRadius={2}
      py={1}
      px={2}
      sx={{
        opacity: .9,
        width: '100%',
        height: 60,
        '&:hover':{
          backgroundColor: "#232323",
          cursor: "pointer",
          opacity: 1
        },
        '&:hover [data-id="track-list-item-image"]': {
          transform: "scale(1.1)",
          transformOrigin: "center center",
          transition: "transform 0.2s ease-in-out",
        },
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
        <Stack direction="row" spacing={2} alignItems="center" sx={{
          flexGrow: 1,
          minWidth: 0
        }}>
          <TrackImage
            imageUrl={track.image}
            trackName={track.name}
            showPlayingLabel={isPlaying && trackId === track.id}
            sx={{
              flexShrink: 0
            }}
          />
          
          <Stack direction="column" justifyContent='center' sx={{
            minWidth: 0,
            flexShrink: 1,
            flexGrow: 1,
            overflow: 'hidden',
          }}>
            <Typography variant="subtitle2" component="h6" fontWeight={'bold'} noWrap>
              {track.name}
            </Typography>
            
            <Typography variant="caption" component="span" color={'textSecondary'} noWrap>
              {track.artist_name}
            </Typography>
          </Stack>
        </Stack>
        
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          divider={<Divider orientation="vertical" flexItem />}
          sx={{
            flexShrink: 0
          }}
        >
          {children}
          <DurationLabel duration={track.duration}/>
        </Stack>
      </Stack>
    </Box>
  )
}