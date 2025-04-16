import Image from "next/image";
import {Box} from "@mui/material";

interface ITrackImageProps {
  imageUrl: string;
  trackName: string;
  size?: number;
}

export default function TrackImage({ imageUrl, trackName, size = 40}: ITrackImageProps) {
  return (
    <Box
      data-id="track-list-item-image"
      sx={{
        width: size,
        height: size,
        borderRadius: 2,
        overflow: 'hidden',
        position: 'relative',
        transition: "transform 0.2s ease-in-out",
      }}
    >
      <Image
        src={imageUrl}
        fill
        alt={trackName}
        loading='lazy'
      />
    </Box>
  )
}