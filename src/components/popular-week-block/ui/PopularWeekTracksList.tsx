'use client'

import SimplifiedTracksList from "@/components/simplified-tracks-list";
import {ITrack} from "@/api/types";

interface IPopularWeekTracksListProps {
  preloadedTracks: ITrack[] | null;
}

export default function PopularWeekTracksList({preloadedTracks}: IPopularWeekTracksListProps) {
  return (
    <SimplifiedTracksList
      playerQueueType={'popular-week'}
      preloadedTracks={preloadedTracks}
    />
  )
}