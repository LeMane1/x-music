'use client'

import {Grid} from "@mui/material";
import SimplifiedTrackItem from "@/shared/SimplifiedTrackItem";
import {ITrack} from "@/api/types";
import {handleTrackItemOnClick} from "@/lib/handlers/handleOnTrackItemClick";
import {useAppDispatch, useAppSelector} from "@/lib/hooks/storeHooks";
import {queueTypes} from "@/lib/slices/audioPlayerSlice";
import TracksListWrapper from "@/components/tracks-list-wrapper";

interface ISimplifiedTracksListProps {
  playerQueueType: queueTypes;
  preloadedTracks: ITrack[] | null;
  showLoadButton?: boolean;
  handleOnLoadButtonClick?: () => void;
  isLoading?: boolean;
}

export default function SimplifiedTracksList({preloadedTracks, playerQueueType, showLoadButton = false, handleOnLoadButtonClick, isLoading = false}: ISimplifiedTracksListProps) {
  const dispatch = useAppDispatch();
  const queueType = useAppSelector(state => state.audioPlayerReducer.queueType)
  const {tracks} = useAppSelector(state => state.mainReducer);
  
  return (
    <TracksListWrapper
      preloadedTracks={preloadedTracks}
      handleOnLoadButtonClick={handleOnLoadButtonClick}
      isLoading={isLoading}
      showLoadButton={showLoadButton}
    >
      <Grid container spacing={2} sx={{width: "100%"}}>
        {
          tracks && tracks.length > 0 && tracks.map((track) => (
            <Grid size={{ xs: 12, sm: 12, md: 6 }} key={track.id}>
              <SimplifiedTrackItem
                track={track}
                onClick={(track) => handleTrackItemOnClick({dispatch,track, tracks, queueType, playerQueueType})}
              />
            </Grid>
          ))
        }
      </Grid>
    </TracksListWrapper>
  )
}