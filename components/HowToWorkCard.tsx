import Image from 'next/image';

interface HowToWorkCardProps {
  iconSrc: string;
  title: string;
  description: string;
}

export default function HowToWorkCard({
  iconSrc,
  title,
  description,
}: HowToWorkCardProps) {
  return (
    <div className="howtowork-card">
      <div>
        <Image
          src={iconSrc}
          alt={title}
          width={100}
          height={100}
          className="howtowork-cardImageCustomClass"
        />
      </div>
      <div className="howtowork-cardItem">
        <h3 className="howtowork-cardTitle">{title}</h3>
        <p className="howtowork-cardDescription">{description}</p>
      </div>
    </div>
  );
}
