import Image from 'next/image';

interface MealCardProps {
  image: string;
  meal: string;
  price: string;
  className: string;
}

export default function MealCard(props: MealCardProps) {
  return (
    <div className={`hero-mealCard ${props.className}`}>
      <div className="hero-mealCardImage">
        <Image src={props.image} alt="meal-1" width={65} height={65} />
      </div>
      <div className="hero-mealCardItem">
        <p className="hero-mealCardMealName">{props.meal}</p>
        <div className="hero-mealCardBox">
          <p className="hero-mealCardPrice">{props.price}</p>
          <p className="hero-mealCardUnderlined ">Order Now</p>
        </div>
      </div>
    </div>
  );
}
