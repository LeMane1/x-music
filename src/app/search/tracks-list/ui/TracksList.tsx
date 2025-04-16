'use client'

import {ITrack} from "@/api/types";
import TrackListItem from "@/app/search/tracks-list/ui/TrackListItem";
import {Button, Stack} from "@mui/material";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {useEffect} from "react";
import {addTracks} from "@/lib/slices/mainSlice";
import LoadButton from "@/app/search/tracks-list/ui/LoadButton";

interface ITracksListProps {
  preloadedTracks: ITrack[] | null;
}

export default function TracksList({preloadedTracks}: ITracksListProps) {
  const tracks = useAppSelector(state => state.mainReducer.tracks);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    if (preloadedTracks) dispatch(addTracks(preloadedTracks));
  }, []);
  
  return (
    <Stack direction="column" spacing={2}>
      {
        tracks && tracks.map((track: ITrack) => (
          <TrackListItem key={track.id} track={track} />
        ))
      }
      
      <LoadButton/>
    </Stack>
  )
}