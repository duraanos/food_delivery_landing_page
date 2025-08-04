import Image from 'next/image';

interface HowToWorkCardProps {
  iconSrc: string;
  title: string;
  description: string;
}

export default function HowToWorkCard(props: HowToWorkCardProps) {
  return (
    <div className="howtowork-card">
      <div>
        <Image
          src={props.iconSrc}
          alt={props.title}
          width={100}
          height={100}
          className="howtowork-cardImageCustomClass"
        />
      </div>
      <div className="howtowork-cardItem">
        <h3 className="howtowork-cardTitle">{props.title}</h3>
        <p className="howtowork-cardDescription">{props.description}</p>
      </div>
    </div>
  );
}
