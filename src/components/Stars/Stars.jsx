import Icon from '../Icon/Icon';

export default function Stars({ rating }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map(star => (
        <Icon
          key={star}
          name="star"
          width={16}
          height={16}
          className={
            star <= rating
              ? 'fill-rating text-rating'
              : 'fill-badges text-badges'
          }
        />
      ))}
    </div>
  );
}
