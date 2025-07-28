import Container from './layout/Container';
import HeroButtonGroup from './HeroButtonGroup';

export default function Hero() {
  return (
    <section>
      <Container>
        <div>
          <div className="flex flex-col">
            <h1 className="text-customGray-900 font-bold text-4xl">
              Skip the Line, <br></br>
              Savor the Taste
            </h1>
            <p className="text-xl">
              No more waiting, no more stress <br></br> order ahead, track your
              meal in real time...
            </p>
          </div>
          <HeroButtonGroup />
        </div>
      </Container>
    </section>
  );
}
