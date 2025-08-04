import Image from 'next/image';
import LetsDoItTogetherCard from './LetsDoItTogetherCard';

export default function LetsDoItTogetherSection() {
  return (
    <section className="letsdoittogether">
      <div className="letsdoittogether-item">
        <Image
          src="/images/lets_do_it_together.svg"
          alt="lets_do_it_together_icon"
          width={125}
          height={125}
        />
        <h2 className="letsdoittogether-title">
          Let's do it together
        </h2>
      </div>
      <div className="letsdoittogether-cards">
        <LetsDoItTogetherCard
          iconSrc="images/become_a_rider.svg"
          title="Become a rider"
          description="Join our fleet of delivery heroes and earn on your schedule. Flexible hours, fast payouts."
        />
        <LetsDoItTogetherCard
          iconSrc="images/become_a_partner.svg"
          title="Become a partner"
          description="Partner with us to reach more customers, boost your sales, and get the support you need every step of the way."
        />
        <LetsDoItTogetherCard
          iconSrc="images/careers.svg"
          title="Careers"
          description="Join a fast-growing team that’s changing how people eat. Big ideas, bold moves, and a career that delivers."
        />
      </div>
    </section>
  );
}
