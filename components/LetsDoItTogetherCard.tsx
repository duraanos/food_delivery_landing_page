import Image from 'next/image';

interface LetsDoItTogetherCardProps {
  iconSrc: string;
  title: string;
  description: string;
}

export default function LetsDoItTogetherCard(props: LetsDoItTogetherCardProps) {
  return (
    <div className="letsdoittogether-card">
      <div>
        <Image src={props.iconSrc} alt="rider" width={250} height={250} />
      </div>
      <div className="letsdoittogether-cardItem">
        <h3 className="letsdoittogether-cardTitle">{props.title}</h3>
        <p className="letsdoittogether-cardDescription">{props.description}</p>
      </div>
    </div>
  );
}
