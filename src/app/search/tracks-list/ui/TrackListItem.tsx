'use client'

import {ITrack} from "@/api/types";
import {Box, Divider, Stack, Typography} from "@mui/material";
import GenresList from "@/app/search/tracks-list/ui/GenresList";
import ListenedCounter from "@/app/search/tracks-list/ui/ListenedCounter";
import DurationLabel from "@/app/search/tracks-list/ui/DurationLabel";
import FavoritesCounter from "@/app/search/tracks-list/ui/FavoritesCounter";
import TrackImage from "@/shared/TrackImage";
import {useAppDispatch, useAppSelector} from "@/lib/hooks/storeHooks";
import {changeCurrentTrack} from "@/lib/slices/audioPlayerSlice";
import {useBreakpoint} from "@/lib/hooks/useBreakpoint";

interface ITrackListItemProps {
  track: ITrack;
}

export default function TrackListItem({ track }: ITrackListItemProps) {
  const dispatch= useAppDispatch()
  const {trackId} = useAppSelector(state => state.audioPlayerReducer.playerTrack)
  const isPlaying = useAppSelector(state => state.audioPlayerReducer)
  const isMdSize = useBreakpoint('md')
  const isSmSize = useBreakpoint('sm')
  
  const handleOnClick = () => {
    dispatch(changeCurrentTrack({
      trackId: track.id,
      trackName: track.name,
      trackArtistName: track.artist_name,
      trackImageUrl: track.image,
      trackDuration: track.duration,
      audioUrl: track.audio
    }))
  }
  
  return (
    <Box
      onClick={handleOnClick}
      borderRadius={2}
      py={1}
      px={2}
      sx={{
        opacity: .9,
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
          {
            isMdSize && track.musicinfo?.tags?.genres?.length > 0 &&
            <GenresList genres={track.musicinfo.tags.genres}/>
          }
          
          {
            isSmSize && track.stats.rate_listened_total &&
            <ListenedCounter listenedCount={track.stats.rate_listened_total}/>
          }
          
          {
            isSmSize && track.stats.favorited &&
            <FavoritesCounter favoritesCount={track.stats.favorited}/>
          }
          
          <DurationLabel duration={track.duration}/>
        </Stack>
      </Stack>
    </Box>
  )
}