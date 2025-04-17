'use client'

import {Button} from "@mui/material";
import {useAppDispatch, useAppSelector} from "@/lib/hooks/storeHooks";
import {addTracks, changeOffset} from "@/lib/slices/mainSlice";
import {serverGetTracks} from "@/app/search/tracks-list/lib/actions";
import {useSearchParams} from "next/navigation";
import {useState} from "react";

export default function LoadButton(){
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams()
  const offset = useAppSelector(state => state.mainReducer.offset)
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  const handleOnClick = async () => {
    setIsLoading(true);
    const searchValue = searchParams.get('search')
    if (searchValue){
      const tracks = await serverGetTracks(searchValue, offset)
      
      if (tracks){
        dispatch(addTracks(tracks))
        dispatch(changeOffset(offset + 10))
      }
      setIsLoading(false);
    }
  }
  
  return (
    <Button
      onClick={handleOnClick}
      loading={isLoading}
      variant='outlined'
      sx={{
        width: 'fit-content',
    }}>
      Load more
    </Button>
  )
}