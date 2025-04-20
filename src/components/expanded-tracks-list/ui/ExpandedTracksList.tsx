'use client'

import {queueTypes} from "@/lib/slices/audioPlayerSlice";
import {ITrack} from "@/api/types";
import {Divider, Stack, Typography} from "@mui/material";
import {handleTrackItemOnClick} from "@/lib/handlers/handleOnTrackItemClick";
import TracksListWrapper from "@/components/tracks-list-wrapper";
import ExpandedTrackItem from "@/shared/ExpandedTrackItem";
import {useAppDispatch, useAppSelector} from "@/lib/hooks/storeHooks";

interface IExpandedTracksListProps {
  playerQueueType: queueTypes;
  preloadedTracks: ITrack[] | null;
  showLoadButton?: boolean;
  handleOnLoadButtonClick?: () => void;
  isLoading?: boolean;
}

export default function ExpandedTracksList(
  {
    playerQueueType,
    preloadedTracks,
    showLoadButton,
    handleOnLoadButtonClick,
    isLoading,
  }: IExpandedTracksListProps) {
  const {tracks} = useAppSelector(state => state.mainReducer);
  const dispatch = useAppDispatch();
  const queueType = useAppSelector(state => state.audioPlayerReducer.queueType)
  
  return(
    <TracksListWrapper
      preloadedTracks={preloadedTracks}
      handleOnLoadButtonClick={handleOnLoadButtonClick}
      isLoading={isLoading}
      showLoadButton={showLoadButton}
    >
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
              <ExpandedTrackItem
                key={track.id + index}
                track={track}
                onClick={(track) => handleTrackItemOnClick({dispatch,track, tracks, queueType, playerQueueType})} />
            ))
            :
            <Typography variant='subtitle1' component='span'>
              No tracks found
            </Typography>
        }
      </Stack>
    </TracksListWrapper>
  )
}