import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';
import RoutesUrl from './routes';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RoutesUrl />
      </ThemeProvider>
      <CssBaseline />
    </>
  );
}

export default App;
