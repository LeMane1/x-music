import {useMediaQuery} from "@mui/system";
import theme from "@/styles/theme";

type Breakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export const useBreakpoint = (breakpoint: Breakpoints) => useMediaQuery(theme.breakpoints.up(breakpoint))