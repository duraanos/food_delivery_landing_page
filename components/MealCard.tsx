import Image from 'next/image';

interface MealCardProps {
  image: string;
  meal: string;
  price: string;
  className: string;
}

export default function MealCard({
  image,
  meal,
  price,
  className,
}: MealCardProps) {
  return (
    <div
      className={`bg-white p-[10px] w-[300] h-[85] flex items-center gap-[10px] rounded-2xl ${className}`}
    >
      <div className="image">
        <Image src={image} alt="meal-1" width={65} height={65} />
      </div>
      <div className="flex flex-col gap-[5px]">
        <p className="font-medium">{meal}</p>
        <div className="flex gap-[50px] items-center justify-center">
          <p className="font-medium">{price}</p>
          <p className="font-medium underline">Order Now</p>
        </div>
      </div>
    </div>
  );
}
