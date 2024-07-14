import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="star-rating">
      {Array.from({ length: fullStars }, (_, index) => (
        <FaStar key={`full-${index}`} />
      ))}
      {halfStar && <FaStarHalfAlt key="half" />}
      {Array.from({ length: emptyStars }, (_, index) => (
        <FaRegStar key={`empty-${index}`} />
      ))}
    </div>
  );
};

export default StarRating;
