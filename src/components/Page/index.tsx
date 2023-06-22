import Footer from '../Footer';
import Navbar from '../Navbar';
import { Container, Main } from './style';

interface PageProps {
  children: JSX.Element | JSX.Element[];
}

function Page({ children }: PageProps) {
  return (
    <Container>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </Container>
  );
}

export default Page;
