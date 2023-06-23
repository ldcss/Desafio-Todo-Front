import { HomeOutlined } from '@mui/icons-material';
import { Avatar, Button, Grid, Paper, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <Paper
      elevation={10}
      style={{
        padding: 20,
        height: '100%',
        width: '60vw',
        marginTop: '30px',
      }}
    >
      <Grid container direction='column' justifyContent='center' alignItems='center'>
        <Stack direction='column' alignItems={'center'} justifyContent={'center'}>
          <Avatar style={{ backgroundColor: '#7CB9E8' }}>
            <HomeOutlined />
          </Avatar>
        </Stack>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '100%',
          }}
        >
          <Link to={'/list'}>
            <Button variant='outlined'>Listagem de tarefas</Button>
          </Link>
          <Link to={'/register'}>
            <Button variant='outlined'>Cadastro de membros</Button>
          </Link>
        </div>
      </Grid>
    </Paper>
  );
}

export default Menu;
