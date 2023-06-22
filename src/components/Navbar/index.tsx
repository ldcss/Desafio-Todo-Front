import Nav, { Menu } from './style';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <Nav>
      <Menu>
        <Link to='/'>
          <h1>To-do</h1>
        </Link>
        <Link to='/form'>
          <p>Cadastrar</p>
        </Link>
        <Link to='/edit'>
          <p>Editar</p>
        </Link>
      </Menu>
    </Nav>
  );
}

export default Navbar;
