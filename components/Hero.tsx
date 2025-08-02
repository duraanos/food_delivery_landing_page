import Image from 'next/image';
import HeroButtonGroup from './HeroButtonGroup';
import CustomerIcons from './CustomerIcons';
import MealCard from './MealCard';

export default function Hero() {
  return (
    <section>
      <div className="flex items-center">
        <div className="flex flex-col w-1/2 gap-[20px]">
          <div className="flex flex-col gap-[5px]">
            <h1 className="text-customGray-900 font-bold text-5xl">
              Skip the Line, <br></br> Savor the{' '}
              <strong className="underline decoration-customLime-700">
                Taste
              </strong>
            </h1>
            <p className="text-base">
              No more waiting, no more stress <br></br> order ahead, track your
              meal in real time...
            </p>
          </div>
          <HeroButtonGroup />
          <div className="flex items-center gap-3">
            <CustomerIcons />
            <p className="text-customLime-700 text-base font-bold">
              500K+ Our Happy Customers
            </p>
          </div>
        </div>
        <div className="relative flex justify-center">
          <MealCard
            image="/images/meal-1.png"
            meal="Traditional Pasta"
            price="$30.00"
            className="absolute right-60 bottom-10 z-20"
          />
          <MealCard
            image="/images/meal-2.png"
            meal="Fish Dish"
            price="$30.00"
            className="absolute left-[262px] bottom-[225px] z-10"
          />
          <MealCard
            image="/images/meal-3.png"
            meal="Steak Frites"
            price="$30.00"
            className="absolute left-72 bottom-4 z-20"
          />
          <div className="absolute -right-10 bottom-10 bg-customLime-700 w-[475] h-[475] rounded-full blur-[70px]"></div>
          <Image
            src="/images/hero.png"
            alt="hero_image"
            width={400}
            height={400}
            className="z-10 w-full"
          />
        </div>
      </div>
    </section>
  );
}
