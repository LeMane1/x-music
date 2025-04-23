'use client'

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {IconButton} from "@mui/material";
import {useAppDispatch} from "@/lib/hooks/storeHooks";
import {changeExpanded} from "@/lib/slices/audioPlayerSlice";

export default function ExpandButton() {
  const dispatch = useAppDispatch();
  return (
    <IconButton onClick={() => dispatch(changeExpanded(true))}>
      <KeyboardArrowUpIcon/>
    </IconButton>
  )
}