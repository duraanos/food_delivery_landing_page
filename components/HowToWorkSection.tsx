import HowToWorkCard from './HowToWorkCard';

export default function HowToWorkSection() {
  return (
    <section>
      <div className="flex flex-col justify-between items-center gap-[16px]">
        <h2 className="font-medium text-4xl">How to Work</h2>
        <p className="text-lg text-customLime-900">
          Browse, order, and enjoy—right to your door in just a few taps.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <HowToWorkCard
          iconSrc="icons/choose_your_meal_icon.svg"
          title="Choose Your Meal"
          description="Browse through hundreds of local restaurants and select your favorite dishes with just a few taps."
        />
        <HowToWorkCard
          iconSrc="icons/place_your_meal_icon.svg"
          title="Place Your Order"
          description="Add items to your cart, customize your order, and securely check out in less than a minute."
        />
        <HowToWorkCard
          iconSrc="icons/track_real_time_icon.svg"
          title="Track Real Time"
          description="Get instant updates on your order status and follow your delivery driver live on the map."
        />
        <HowToWorkCard
          iconSrc="icons/enjoy_&_repeat_icon.svg"
          title="Enjoy & Repeat"
          description="Your order arrives hot and fresh—save it as a favorite to reorder anytime in seconds."
        />
      </div>
    </section>
  );
}