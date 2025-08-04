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
    <div className={`hero-mealCard ${className}`}>
      <div className="hero-mealCardImage">
        <Image src={image} alt="meal-1" width={65} height={65} />
      </div>
      <div className="hero-mealCardItem">
        <p className="hero-mealCardMealName">{meal}</p>
        <div className="hero-mealCardBox">
          <p className="hero-mealCardPrice">{price}</p>
          <p className="hero-mealCardUnderlined ">Order Now</p>
        </div>
      </div>
    </div>
  );
}
