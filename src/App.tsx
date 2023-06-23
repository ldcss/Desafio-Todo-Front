import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';
import RoutesUrl from './routes';
import 'react-toastify/dist/ReactToastify.css';

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
