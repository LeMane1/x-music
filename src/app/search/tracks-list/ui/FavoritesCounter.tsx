import {Stack, SvgIcon, Typography} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';

interface IFavoritesCounterProps {
  favoritesCount: number;
}

export default function FavoritesCounter({favoritesCount}: IFavoritesCounterProps) {
  return (
    <Stack direction="row" alignItems="center" spacing={0.5}>
      <SvgIcon sx={{
        width: 20,
        height: 20,
        opacity: .7
      }}>
        <FavoriteIcon />
      </SvgIcon>
      
      <Typography variant="subtitle1" component="span" color={'textSecondary'}>
        {favoritesCount}
      </Typography>
    </Stack>
  )
}