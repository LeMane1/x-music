import {ITrack} from "@/api/types";
import {changeCurrentTrack, queueTypes, setTracksQueue} from "@/lib/slices/audioPlayerSlice";
import {AppDispatch} from "@/lib/store";

interface IHandleOnTrackItemClick {
  dispatch: AppDispatch;
  track: ITrack;
  tracks: ITrack[];
  queueType: queueTypes;
  playerQueueType: queueTypes;
}

export const handleTrackItemOnClick = ({
  dispatch,
  track,
  tracks,
  queueType,
  playerQueueType,
 }: IHandleOnTrackItemClick) => {
  
  // Check Player Queue type and set tracks to it if type is not equal to type in props
  if (queueType !== playerQueueType){
    dispatch(setTracksQueue(tracks))
  }
  
  dispatch(changeCurrentTrack({
    trackId: track.id,
    trackName: track.name,
    trackArtistName: track.artist_name,
    trackImageUrl: track.image,
    trackDuration: track.duration,
    audioUrl: track.audio
  }))
}