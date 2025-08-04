import Image from 'next/image';
import HeroButtonGroup from './HeroButtonGroup';
import CustomerIcons from './CustomerIcons';
import MealCard from './MealCard';

export default function Hero() {
  return (
    <section>
      <div className="hero">
        <div className="hero-banner">
          <div className="hero-bannerTexts">
            <h1 className="hero-title">
              Skip the Line, <br></br> Savor the{' '}
              <strong className="underline decoration-customLime-700">
                Taste
              </strong>
            </h1>
            <p className="hero-description">
              No more waiting, no more stress <br></br> order ahead, track your
              meal in real time...
            </p>
          </div>
          <HeroButtonGroup />
          <div className="hero-customers">
            <CustomerIcons />
            <p className="hero-customerDescription">
              500K+ Our Happy Customers
            </p>
          </div>
        </div>
        <div className="hero-images">
          <MealCard
            image="/images/meal-1.png"
            meal="Traditional Pasta"
            price="$30.00"
            className="hero-imagesCustomClass1"
          />
          <MealCard
            image="/images/meal-2.png"
            meal="Fish Dish"
            price="$30.00"
            className="hero-imagesCustomClass2"
          />
          <MealCard
            image="/images/meal-3.png"
            meal="Steak Frites"
            price="$30.00"
            className="hero-imagesCustomClass3"
          />
          <div className="absolute -right-10 bottom-10 bg-customLime-700 w-[475] h-[475] rounded-full blur-[70px]"></div>
          <Image
            src="/images/hero.png"
            alt="hero_image"
            width={400}
            height={400}
            className="hero-imageCustom"
          />
        </div>
      </div>
    </section>
  );
}
