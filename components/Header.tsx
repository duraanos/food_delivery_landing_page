import Container from './layout/Container';
import Navbar from './Navbar';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-customLime-100 from-0% to-customLime-200 to-72%">
      <Container>
        <Navbar />
      </Container>
    </header>
  );
}
