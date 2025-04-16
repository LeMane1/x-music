'use client'

import {ITrack} from "@/api/types";
import {Box, Divider, Stack, Typography} from "@mui/material";
import GenresList from "@/app/search/tracks-list/ui/GenresList";
import ListenedCounter from "@/app/search/tracks-list/ui/ListenedCounter";
import DurationLabel from "@/app/search/tracks-list/ui/DurationLabel";
import FavoritesCounter from "@/app/search/tracks-list/ui/FavoritesCounter";
import TrackImage from "@/shared/TrackImage";
import {useAppDispatch} from "@/lib/hooks";
import {changeCurrentTrack} from "@/lib/slices/audioPlayerSlice";

interface ITrackListItemProps {
  track: ITrack;
}

export default function TrackListItem({ track }: ITrackListItemProps) {
  const dispatch= useAppDispatch()
  
  const handleOnClick = () => {
    dispatch(changeCurrentTrack({
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
        backgroundColor: "#272727",
        opacity: .9,
        '&:hover':{
          backgroundColor: "#2b2b2b",
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
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" spacing={2} alignItems="center">
          <TrackImage imageUrl={track.image} trackName={track.name} />
          
          <Stack direction="column" justifyContent='center'>
            <Typography variant="subtitle2" component="h6" fontWeight={'bold'}>
              {track.name}
            </Typography>
            
            <Typography variant="caption" component="span" color={'textSecondary'}>
              {track.artist_name}
            </Typography>
          </Stack>
        </Stack>
        
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          divider={<Divider orientation="vertical" flexItem />}
        >
          {
            track.musicinfo?.tags?.genres?.length > 0 &&
            <GenresList genres={track.musicinfo.tags.genres}/>
          }
          
          {
            track.stats.rate_listened_total &&
            <ListenedCounter listenedCount={track.stats.rate_listened_total}/>
          }
          
          {
            track.stats.favorited &&
            <FavoritesCounter favoritesCount={track.stats.favorited}/>
          }
          
          <DurationLabel duration={track.duration}/>
        </Stack>
      </Stack>
    </Box>
  )
}