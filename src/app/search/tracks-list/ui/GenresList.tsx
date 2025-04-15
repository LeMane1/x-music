import {Stack, SvgIcon, Typography} from "@mui/material";
import {default as MuiTagIcon} from "@mui/icons-material/Tag";

interface IGenresListProps {
  genres: string[]
}

export default function GenresList({genres}: IGenresListProps) {
  return (
    <Stack direction="row" alignItems="center" spacing={0.5}>
      <SvgIcon sx={{
        width: 20,
        height: 20,
        opacity: .7
      }}>
        <MuiTagIcon/>
      </SvgIcon>
      
      <Stack direction='row' spacing={0.5}>
        {
          genres.map(genre => (
            <Typography color={'textSecondary'} key={genre}>
              {genre}
            </Typography>
          ))
        }
      </Stack>
    </Stack>
  )
}