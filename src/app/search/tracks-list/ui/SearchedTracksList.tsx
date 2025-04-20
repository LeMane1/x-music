'use client'

import ExpandedTracksList from "@/components/expanded-tracks-list";
import {ITrack} from "@/api/types";
import {handleOnLoadButtonClick} from "@/lib/handlers/handleOnLoadButtonClick";
import {serverGetSearchedTracksAction} from "@/app/search/tracks-list/lib/actions";
import {useState} from "react";
import {useAppDispatch, useAppSelector} from "@/lib/hooks/storeHooks";

interface ISearchedTracksListProps {
  preloadedTracks: ITrack[] | null;
  searchName: string;
}

export default function SearchedTracksList({preloadedTracks, searchName}: ISearchedTracksListProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const queueType = useAppSelector(state => state.audioPlayerReducer.queueType)
  const {offset} = useAppSelector(state => state.mainReducer);
  
  const handleOnClick = () => {
    if (searchName) {
      handleOnLoadButtonClick({
        dispatch,
        queueType,
        playerQueueType: 'searched',
        setIsLoading,
        serverActionCallback: serverGetSearchedTracksAction,
        serverActionArgs: [searchName, offset]
      })
    }
  }
  
  return (
    <ExpandedTracksList
      playerQueueType={'searched'}
      preloadedTracks={preloadedTracks}
      handleOnLoadButtonClick={handleOnClick}
      showLoadButton={true}
      isLoading={isLoading}
    />
  )
}