import {ITrack} from "@/api/types";
import TrackListItem from "@/app/search/tracks-list/ui/TrackListItem";
import {Stack} from "@mui/material";

interface ITracksListProps {
  tracks: ITrack[] | null;
}

export default function TracksList({tracks}: ITracksListProps) {
  return (
    <Stack direction="column" spacing={2}>
      {
        tracks && tracks.map((track: ITrack) => (
          <TrackListItem key={track.id} track={track} />
        ))
      }
    </Stack>
  )
}