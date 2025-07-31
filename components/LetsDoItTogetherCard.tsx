import Image from 'next/image';

interface LetsDoItTogetherCardProps {
  iconSrc: string;
  title: string;
  description: string;
}

export default function LetsDoItTogetherCard({
  iconSrc,
  title,
  description,
}: LetsDoItTogetherCardProps) {
  return (
    <div className='flex flex-col gap-5 w-52'>
      <div>
        <Image src={iconSrc} alt="rider" width={250} height={250} />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-customLime-900 font-bold text-xl">{title}</h3>
        <p className="text-customLime-900">{description}</p>
      </div>
    </div>
  );
}
