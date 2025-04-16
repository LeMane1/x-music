import {getDurationString} from "@/lib/functions/getDurationString";
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