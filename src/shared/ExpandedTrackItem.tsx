'use client'

import SimplifiedTrackItem from "@/shared/SimplifiedTrackItem";
import {ITrack} from "@/api/types";
import GenresList from "@/app/search/tracks-list/ui/GenresList";
import ListenedCounter from "@/app/search/tracks-list/ui/ListenedCounter";
import FavoritesCounter from "@/app/search/tracks-list/ui/FavoritesCounter";
import {useBreakpoint} from "@/lib/hooks/useBreakpoint";

interface IExpandedTrackItemProps {
  track: ITrack;
  onClick: (track: ITrack) => void;
}

export default function ExpandedTrackItem({track, onClick}: IExpandedTrackItemProps) {
  const isMdSize = useBreakpoint('md')
  const isSmSize = useBreakpoint('sm')
  
  return (
    <SimplifiedTrackItem track={track} onClick={onClick}>
      <>
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
      </>
    </SimplifiedTrackItem>
  )
}