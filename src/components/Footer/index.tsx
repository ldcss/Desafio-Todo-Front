import { FaGithubSquare, FaGitlab, FaLinkedin } from 'react-icons/fa';
import { Copyright, FooterContainer, IconsContainer, IconsItems } from './style';

function Footer() {
  return (
    <FooterContainer>
      <IconsContainer>
        <IconsItems>
          <a href='https://gitlab.cin.ufpe.br/ldcs'>
            <FaGitlab />
          </a>
        </IconsItems>
        <IconsItems>
          <a href='github.com/ldcss'>
            <FaGithubSquare />
          </a>
        </IconsItems>
        <IconsItems>
          <a href='https://www.linkedin.com/in/lucas-dcs/'>
            <FaLinkedin />
          </a>
        </IconsItems>
      </IconsContainer>
      <Copyright>
        <span>To-Do</span> &copy; 2023
      </Copyright>
    </FooterContainer>
  );
}

export default Footer;
