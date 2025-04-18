'use client'

import {InputBase} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {useEffect, useState} from "react";
import {redirect, usePathname, useRouter, useSearchParams} from "next/navigation";

export default function SearchBar() {
  const [inputValue, setInputValue] = useState('');
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  
  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    const searchValue = params.get('search')
    
    console.log(searchValue)
    
    if (searchValue) setInputValue(searchValue)
  },[searchParams])
  
  const handleOnSubmit = () => {
    const params = new URLSearchParams(searchParams);
    
    if (inputValue !== '') {
      params.set('search', inputValue);
    } else {
      params.delete('search');
    }
    
    if (pathname !== '/search'){
      redirect(`/search?${params.toString()}`)
    }
    
    replace(`${pathname}?${params.toString()}`);
  }
  
  return (
    <InputBase
      onSubmit={handleOnSubmit}
      onChange={(e) => setInputValue(e.target.value)}
      onKeyDown={(event) => {
        if (event.key === 'Enter') {
          handleOnSubmit()
        }
      }}
      value={inputValue}
      sx={{
        width: {
          xs: '100%',
          sm: 200,
          md: 200,
          lg: 200,
          xl: 200,
        },
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 2,
        paddingLeft: 1,
        paddingRight: 1,
        transition: 'all .3s ease-in-out',
        '&.Mui-focused': {
          width: {
            xs: '100%',
            sm: 300,
            md: 300,
            lg: 300,
            xl: 300,
          },
          boxShadow: 3,
          transition: 'all .3s ease-in-out',
        },
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
        },
      }}
      placeholder="Search music"
      inputProps={{ 'aria-label': 'search music' }}
      startAdornment={
        <SearchIcon
          opacity={.5}
          sx={{
            marginRight: 1
        }}/>}
    />
  )
}