import {fetchWithRetries} from "@/api/fetchDataWithRetries";
import {IGetTracksResponse} from "@/api/types";
import TracksList from "@/app/search/tracks-list";

export default async function SearchPage(props: {
  searchParams?: Promise<{
    search?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const searchName = searchParams?.search || '';
  
  const getTracksResponse = await fetchWithRetries<IGetTracksResponse>({
    url: '/v3.0/tracks/',
    searchParams: {
      namesearch: searchName,
      include: 'musicinfo+stats'
    }
  })
  
  const tracks = getTracksResponse?.results ?? null
  
  return (
    <TracksList preloadedTracks={tracks}/>
  )
}