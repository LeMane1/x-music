'use client'

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import {IconButton, SxProps} from "@mui/material";

interface IDownloadButtonProps {
  trackUrl: string;
  isTrackDownloadAllowed: boolean;
  sx?: SxProps;
}

export default function DownloadButton({ trackUrl, isTrackDownloadAllowed = false, sx}: IDownloadButtonProps) {
  return (
    <IconButton
      href={trackUrl && trackUrl.length > 0 ? trackUrl :  '#'}
      onClick={(e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => e.stopPropagation()}
      disabled={!(isTrackDownloadAllowed || (trackUrl && trackUrl.length > 0))}
      sx={{
        ...sx
      }}
    >
      <ArrowDownwardIcon/>
    </IconButton>
  )
}