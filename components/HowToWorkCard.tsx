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
    <div className="bg-gradient-to-t from-customGreen-100 from-19% to-customLime-100 to-66% flex flex-col items-center p-[20px] rounded-2xl">
      <div>
        <Image
          src={iconSrc}
          alt={title}
          width={100}
          height={100}
          className="text-customLime-900"
        />
      </div>
      <div className="flex flex-col items-center">
        <h3 className="text-customLime-900 font-semibold text-xl mb-[16px]">{title}</h3>
        <p className="text-customLime-900 text-base">{description}</p>
      </div>
    </div>
  );
}
