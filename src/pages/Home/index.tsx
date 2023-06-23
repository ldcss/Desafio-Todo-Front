import { Grid } from '@mui/material';
import Menu from '../../components/Menu';

function Home() {
  return (
    <Grid
      container
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      style={{ width: '100%', height: '100%' }}
    >
      <Menu />
    </Grid>
  );
}

export default Home;
