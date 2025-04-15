import {getDurationString} from "@/app/search/tracks-list/lib/getDurationString";
import {Typography} from "@mui/material";

interface IDurationLabelProps {
  duration: number;
}

export default function DurationLabel({duration}: IDurationLabelProps) {
  return (
    <Typography variant="subtitle1" component="h6" color={'textSecondary'}>
      {getDurationString(duration)}
    </Typography>
  )
}