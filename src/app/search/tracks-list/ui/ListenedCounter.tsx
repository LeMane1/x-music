import {Stack, SvgIcon, Typography} from "@mui/material";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

interface IListenedCounterProps {
  listenedCount: number;
}

export default function ListenedCounter({listenedCount}: IListenedCounterProps) {
  return (
    <Stack direction="row" alignItems="center" spacing={0.5}>
      <SvgIcon sx={{
        width: 20,
        height: 20,
        opacity: .7
      }}>
        <MusicNoteIcon/>
      </SvgIcon>
      
      <Typography variant="subtitle1" component="span" color={'textSecondary'}>
        {listenedCount}
      </Typography>
    </Stack>
  )
}