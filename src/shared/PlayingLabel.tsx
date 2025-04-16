import {Box} from "@mui/material";
import { styled, keyframes } from '@mui/system';

const bounce = keyframes`
  10% {
    transform: scaleY(0.3);
  }
  30% {
    transform: scaleY(1);
  }
  60% {
    transform: scaleY(0.5);
  }
  80% {
    transform: scaleY(0.75);
  }
  100% {
    transform: scaleY(0.6);
  }
`;

const Wrapper = styled(Box)({
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
  width: 13,
  height: 13,
  gap: '2px',
  
  '& span': {
    width: 3,
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 1,
    transformOrigin: 'bottom',
    animation: `${bounce} 2.2s ease infinite alternate`,
  },
  
  '& span:nth-of-type(1)': {
    animationDelay: '0s',
  },
  '& span:nth-of-type(2)': {
    animationDelay: '0.2s',
  },
  '& span:nth-of-type(3)': {
    animationDelay: '0.4s',
  },
});

export default function PlayingLabel(){
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgba(0, 0, 0, 0.7)',
      }}
    >
      <Wrapper>
        <span />
        <span />
        <span />
      </Wrapper>
    </Box>
  )
}