import Image from 'next/image';
import HeroButtonGroup from './HeroButtonGroup';
import CustomerIcons from './CustomerIcons';

export default function Hero() {
  return (
    <section>
      <div className="flex items-center justify-between">
        <div className="flex flex-col w-1/2 gap-[20px]">
          <div className="flex flex-col gap-[5px]">
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
          <div className="flex items-center gap-3">
            <CustomerIcons />
            <p className="text-customLime-700 text-base font-bold">
              500K+ Our Happy Customers
            </p>
          </div>
        </div>
        <div className="relative flex justify-center w-1/2">
          <div className="absolute right-10 bottom-0 bg-customLime-700 w-[475] h-[475] rounded-full blur-[100px]"></div>
          <Image
            src="/images/hero.png"
            alt="hero_image"
            width={400}
            height={400}
            className='z-10'
          />
        </div>
      </div>
    </section>
  );
}
