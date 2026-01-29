import clsx from 'clsx';
import Icon from '../Icon/Icon';

export default function Stars({ rating, className }) {
  return (
    <div className={clsx('flex items-center gap-1', className)}>
      {Array.from({ length: 5 }).map((_, idx) => (
        <Icon
          key={idx}
          name="rating"
          size={16}
          className={clsx({
            'fill-rating': idx < rating,
            'fill-badges': idx >= rating,
          })}
        />
      ))}
    </div>
  );
}
