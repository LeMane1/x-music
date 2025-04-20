import {fetchWithRetries} from "@/api/fetchDataWithRetries";
import {IGetTracksResponse} from "@/api/types";
import {Divider, Stack, Typography} from "@mui/material";
import SearchedTracksList from "@/app/search/tracks-list/ui/SearchedTracksList";

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
    <Stack direction="column" spacing={2}>
      <Stack direction="column" spacing={1} paddingLeft={2} paddingRight={2}>
        <Typography variant="h4" component="h4" noWrap>
          {searchName}
        </Typography>
        
        <Divider orientation={'horizontal'}/>
      </Stack>
      
      <SearchedTracksList preloadedTracks={tracks}/>
    </Stack>
  )
}