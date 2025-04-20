'use client'

import {Box} from "@mui/material";
import LoadButton from "./LoadButton";
import {useEffect} from "react";
import {prepareQueue} from "@/lib/slices/mainSlice";
import {useAppDispatch} from "@/lib/hooks/storeHooks";
import {ITrack} from "@/api/types";

interface ITrackListWrapperProps {
  preloadedTracks: ITrack[] | null;
  showLoadButton?: boolean;
  children?: React.ReactNode;
  handleOnLoadButtonClick?: () => void;
  isLoading?: boolean;
}

export default function TracksListWrapper(
  {
    preloadedTracks,
    showLoadButton = false,
    children,
    handleOnLoadButtonClick,
    isLoading = false,
  }: ITrackListWrapperProps){
  const dispatch = useAppDispatch();
  
  // For now, it's available to have only one tracks list per page, but may be it will be refactored in the future
  useEffect(() => {
    if (preloadedTracks && preloadedTracks.length > 0) {
      dispatch(prepareQueue(preloadedTracks));
    }
  }, [preloadedTracks]);
  
  return (
    <>
      {children}
      
      {
        showLoadButton && <Box sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <LoadButton
            onClick={handleOnLoadButtonClick}
            isLoading={!!isLoading}
          />
        </Box>
      }
    </>
  )
}