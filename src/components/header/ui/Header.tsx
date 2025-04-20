import {Box, Container} from "@mui/material";
import SearchBar from "@/components/header/ui/SearchBar";
import Image from 'next/image'
import Link from "next/link";

export default function Header() {
  return (
    <Box
      component="header"
      sx={{
        position: 'fixed',
        top: 0,
        zIndex: 100,
        width: '100%',
        height: 60,
        backgroundColor: 'rgba(18, 18, 18, 0.3)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexShrink: 0
      }}>
      <Container maxWidth="lg">
        <Box
          px={2}
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 1,
        }}>
          <Link href={'/'}>
            <Image
              src={'/icons/logo.svg'}
              alt='X Music'
              width={80}
              height={40}
              style={{ display: 'block' }}
            />
          </Link>
          
          <SearchBar/>
        </Box>
      </Container>
    </Box>
  )
}