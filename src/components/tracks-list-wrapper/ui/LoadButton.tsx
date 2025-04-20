'use client'

import {Button} from "@mui/material";

interface ILoadButtonProps {
  isLoading: boolean;
  onClick?: () => void;
}

export default function LoadButton({isLoading, onClick}: ILoadButtonProps) {
  return (
    <Button
      onClick={onClick}
      loading={isLoading}
      variant='outlined'
      sx={{
        width: 'fit-content',
    }}>
      Load more
    </Button>
  )
}