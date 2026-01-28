import Icon from '../Icon/Icon';

export default function Rating({ rating, totalReviews, className, onClick }) {
  return (
    <div className={className}>
      <button
        onClick={onClick}
        className="flex items-center hover:underline"
        type="button"
      >
        <Icon
          name="star"
          width={16}
          height={16}
          className="fill-rating text-rating mr-1"
        />
        {rating} ({totalReviews} Reviews)
      </button>
    </div>
  );
}
