import {Container, Stack} from "@mui/material";
import Header from "@/components/header";

export default function ContainerLayout(
  {
    children
  }: Readonly<{children: React.ReactNode}>){
  return (
    <Stack direction="column"
       sx={{
         minHeight: '100vh',
         paddingTop: '60px',
         paddingBottom: '60px',
       }}
    >
      <Header/>
      <Container maxWidth="lg">
        {children}
      </Container>
    </Stack>
  )
}