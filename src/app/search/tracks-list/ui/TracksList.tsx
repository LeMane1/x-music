'use client'

import {ITrack} from "@/api/types";
import TrackListItem from "@/app/search/tracks-list/ui/TrackListItem";
import {Box, Divider, Stack, Typography} from "@mui/material";
import {useAppDispatch, useAppSelector} from "@/lib/hooks/storeHooks";
import {useEffect} from "react";
import {prepareQueue} from "@/lib/slices/mainSlice";
import LoadButton from "@/app/search/tracks-list/ui/LoadButton";

interface ITracksListProps {
  preloadedTracks: ITrack[] | null;
}

export default function TracksList({preloadedTracks}: ITracksListProps) {
  const tracks = useAppSelector(state => state.mainReducer.tracks);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    if (preloadedTracks && preloadedTracks.length > 0) {
      dispatch(prepareQueue(preloadedTracks));
    }
  }, [preloadedTracks]);
  
  return (
    <>
      <Stack
        direction="column"
        mb={3}
        divider={
          <Divider
            orientation="horizontal"
            flexItem
            sx={{
              marginLeft: 9,
              marginRight: 2,
              opacity: .3
            }}
          />}
      >
        {
          tracks && tracks.length > 0 ?
            tracks.map((track: ITrack, index: number) => (
              <TrackListItem key={track.id + index} track={track}/>
            ))
            :
            <Typography variant='subtitle1' component='span'>
              No tracks found
            </Typography>
        }
      </Stack>
      
      <Box sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <LoadButton/>
      </Box>
    </>
  )
}