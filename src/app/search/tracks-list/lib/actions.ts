'use server'

import {fetchWithRetries} from "@/api/fetchDataWithRetries";
import {IGetTracksResponse} from "@/api/types";

export async function serverGetTracks(searchValue: string, offset: number) {
  const getTracksResponse = await fetchWithRetries<IGetTracksResponse>({
    url: '/v3.0/tracks/',
    searchParams: {
      namesearch: searchValue,
      include: 'musicinfo+stats',
      offset: offset.toString()
    }
  })
  
  return getTracksResponse?.results ?? null;
}