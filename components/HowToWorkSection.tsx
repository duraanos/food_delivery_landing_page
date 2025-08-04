import HowToWorkCard from './HowToWorkCard';

export default function HowToWorkSection() {
  return (
    <section className='howtowork'>
      <div className="howtowork-item">
        <h2 className="howtowork-title">How to Work</h2>
        <p className="howtowork-description">
          Browse, order, and enjoy—right to your door in just a few taps.
        </p>
      </div>
      <div className="howtowork-cards">
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
