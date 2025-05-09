import Image from "next/image";
import {Box, SxProps} from "@mui/material";
import PlayingLabel from "@/shared/PlayingLabel";

interface ITrackImageProps {
  imageUrl: string;
  trackName: string;
  size?: number;
  showPlayingLabel?: boolean;
  sx?: SxProps;
}

export default function TrackImage({ imageUrl, trackName, size = 40, showPlayingLabel = false, sx}: ITrackImageProps) {
  return (
    <Box
      data-id="track-list-item-image"
      sx={{
        width: size,
        height: size,
        overflow: 'hidden',
        position: 'relative',
        transition: "transform 0.2s ease-in-out",
        borderRadius: '20%',
        aspectRatio: '1/1',
        '&::before':{
          content: "''",
          position: 'absolute',
          zIndex: '-1',
          borderRadius: '2% /30%',
          bottom: 33,
          left: -2,
          right: -2,
          top: 33,
        },
        '&::after':{
          content: "''",
          position: 'absolute',
          zIndex: '-1',
          borderRadius: '30% / 2%',
          bottom: -2,
          left: 33,
          right: 33,
          top: -2,
        },
        ...sx,
      }}
    >
      <Image
        src={imageUrl}
        fill
        alt={trackName}
        loading='lazy'
      />
      
      {showPlayingLabel && <PlayingLabel/>}
    </Box>
  )
}