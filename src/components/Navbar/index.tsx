import { Typography } from '@mui/material';
import Nav, { Menu } from './style';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <Nav>
      <Menu>
        <Link to='/'>
          <Typography>To-do</Typography>
        </Link>
        <Link to='/edit'>
          <Typography variant='subtitle2'>Editar Tasks</Typography>
        </Link>
        <Link to='/form'>
          <Typography variant='subtitle2'>Cadastrar Tasks</Typography>
        </Link>
        <Link to='/form'>
          <Typography variant='subtitle2'>Editar Membros</Typography>
        </Link>
        <Link to='/form'>
          <Typography variant='subtitle2'>Cadastrar Membros</Typography>
        </Link>
      </Menu>
    </Nav>
  );
}

export default Navbar;
