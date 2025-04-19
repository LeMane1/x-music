import {addTracksToPlayerQueue, queueTypes} from "@/lib/slices/audioPlayerSlice";
import {addTracksToQueue} from "@/lib/slices/mainSlice";
import {AppDispatch} from "@/lib/store";
import {ITrack} from "@/api/types";

interface IHandleOnLoadButtonClick<Args extends unknown[]>{
  dispatch: AppDispatch;
  queueType: queueTypes;
  playerQueueType: queueTypes;
  setIsLoading: (value: boolean) => void;
  serverActionCallback: (...args: Args) => Promise<ITrack[] | null>;
  serverActionArgs: Args;
}

export const handleOnLoadButtonClick = async <Args extends unknown[]>({
  dispatch,
  queueType,
  playerQueueType,
  setIsLoading,
  serverActionCallback,
  serverActionArgs
  }: IHandleOnLoadButtonClick<Args>) => {
  
  setIsLoading(true);
  
  const tracks = await serverActionCallback(...serverActionArgs)
  
  if (tracks){
    // Push tracks to Player Queue
    if (queueType == playerQueueType){
      dispatch(addTracksToPlayerQueue(tracks))
    }
    dispatch(addTracksToQueue(tracks))
  }
  
  setIsLoading(false);
}