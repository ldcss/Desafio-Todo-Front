import styled from 'styled-components';

const Nav = styled.div`
  position: sticky;
  top: 0;
  z-index: 9999;
`;

export const Menu = styled.nav`
  display: flex;
  background-color: #222;
  align-items: center;
  text-align: center;
  padding: 1rem 2rem;

  max-width: 100%;
  height: 80px;
  gap: 3rem;
  font-size: 1.5rem;

  a:first-child {
    margin-right: auto;
    &:hover {
      text-decoration: none;
    }
  }
  a {
    text-decoration: none;
    color: white;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default Nav;
