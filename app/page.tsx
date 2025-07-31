import Container from '@/components/layout/Container';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HowToWorkSection from '@/components/HowToWorkSection';
import LetsDoItTogetherSection from '@/components/LetsDoItTogetherSection';

function Home() {
  return (
    <>
      <div className="bg-gradient-to-r from-customLime-100 from-0% to-customLime-200 to-72% mb-32">
        <Container>
          <Header />
          <Hero />
        </Container>
      </div>
      <main>
        <Container>
          <HowToWorkSection />
        </Container>
        <div className="bg-[url('/images/wavy_bg.png')] bg-cover  w-full">
          <Container>
            <LetsDoItTogetherSection />
          </Container>
        </div>
      </main>
    </>
  );
}

export default Home;
