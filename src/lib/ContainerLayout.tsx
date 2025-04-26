import {Container, Stack} from "@mui/material";
import Header from "@/components/header";
import {Suspense} from "react";

export default function ContainerLayout(
  {
    children
  }: Readonly<{children: React.ReactNode}>){
  return (
    <Stack
      direction="column"
      sx={{
        minHeight: '100vh',
        paddingTop: '60px',
        paddingBottom: '100px',
      }}
    >
      <Suspense fallback={null}>
        <Header/>
      </Suspense>
      
      <Container maxWidth="lg">
        {children}
      </Container>
    </Stack>
  )
}