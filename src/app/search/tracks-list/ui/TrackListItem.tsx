import {ITrack} from "@/api/types";
import {Box, Stack, SvgIcon, Typography} from "@mui/material";
import Image from 'next/image'
import {getDurationString} from "@/app/search/tracks-list/lib/getDurationString";
import MusicNoteIcon from '@mui/icons-material/MusicNote';

interface ITrackListItemProps {
  track: ITrack;
}

export default function TrackListItem({ track }: ITrackListItemProps) {
  console.log(track)
  
  return (
    <Box
      borderRadius={2}
      // padding={1}
      py={1}
      px={2}
      sx={{
        backgroundColor: "#272727",
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" spacing={1} alignItems="center">
          <Image
            src={track.image}
            width={40}
            height={40}
            alt={'ghgh'}
          />
          
          <Stack direction="column" justifyContent='center'>
            <Typography variant="subtitle2" component="h6" fontWeight={'bold'}>
              {track.name}
            </Typography>
            
            <Typography variant="caption" component="span" color={'textSecondary'}>
              {track.artist_name}
            </Typography>
          </Stack>
        </Stack>
        
        <Stack direction="row" alignItems="center" spacing={1}>
          <Stack direction="row" alignItems="center">
            <SvgIcon sx={{
              opacity: .7
            }}>
              <MusicNoteIcon/>
            </SvgIcon>
            <Typography variant="subtitle1" component="span" color={'textSecondary'}>
              {track.stats.rate_listened_total}
            </Typography>
          </Stack>
          <Typography variant="subtitle1" component="h6" color={'textSecondary'}>
            {getDurationString(track.duration)}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  )
}