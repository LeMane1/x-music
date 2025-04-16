import {Container, Stack} from "@mui/material";
import AudioPlayer from "@/components/audio-player";

export default function ContainerLayout(
  {
    children
  }: Readonly<{children: React.ReactNode}>){
  return (
    <Stack direction="column"
           sx={{
             minHeight: '100vh',
             justifyContent: 'space-between',
           }}
    >
      <Container
        maxWidth="lg"
        sx={{
          padding: 2,
      }}>
        {children}
      </Container>
      
      <AudioPlayer/>
    </Stack>
  )
}