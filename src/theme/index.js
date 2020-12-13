import { createMuiTheme, colors } from '@material-ui/core';
import shadows from './shadows';
import typography from './typography';

const theme = createMuiTheme({
  palette: {
    background: {
      dark: '#ececec',
      default: '#ececec',
      paper: colors.common.white
    },
    primary: {
      main: '#f3d250',
    },
    secondary: {
      main: '#5da2d5',
    },
    error: {
      main: '#f78888',
    },
    text: {
      primary: '#262626',
      secondary: '#6A605C'
    }
  },
  shadows,
  typography
});

export default theme;
