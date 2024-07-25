import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

interface Props {
  rating: number;
  ratings: number;
}

export default function Ratings({ rating, ratings }: Props) {
  // Helper function to render stars
  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={i} color="black" />
        ))}
        {halfStar && <FaStarHalfAlt color="black" />}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={i} color="black" />
        ))}
      </>
    );
  };

  return (
    <div className="flex items-center gap-x-1">
      {renderStars()}
      <span className="ml-1 text-sm">({ratings} ratings)</span>
    </div>
  );
}
