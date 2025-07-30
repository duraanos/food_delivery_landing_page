import Container from '@/components/layout/Container';
import Header from '@/components/Header';
import Hero from '@/components/Hero';

function Home() {
  return (
    <>
      <div className="bg-gradient-to-r from-customLime-100 from-0% to-customLime-200 to-72%">
        <Container>
          <Header />
          <main>
            <Hero />
          </main>
        </Container>
      </div>
    </>
  );
}

export default Home;
