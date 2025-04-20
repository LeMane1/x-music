import {Stack, Typography} from "@mui/material";
import {fetchWithRetries} from "@/api/fetchDataWithRetries";
import {IGetTracksResponse} from "@/api/types";
import PopularWeekTracksList from "@/components/popular-week-block/ui/PopularWeekTracksList";

export default async function PopularWeekBlock() {
  const getTracksResponse = await fetchWithRetries<IGetTracksResponse>({
    url: '/v3.0/tracks/',
    searchParams: {
      include: 'musicinfo+stats',
      order: 'popularity_week'
    }
  })
  
  const tracks = getTracksResponse?.results ?? null
  
  return (
    <Stack direction='column' spacing={2}>
      <Typography variant='h4' component='h4' fontWeight='bold'>
        Popular this week
      </Typography>
      
      <PopularWeekTracksList preloadedTracks={tracks}/>
    </Stack>
  )
}