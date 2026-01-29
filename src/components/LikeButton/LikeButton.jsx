import clsx from 'clsx';
import Icon from '../Icon/Icon';

export default function LikeButton({ onClick, isActive, className }) {
  return (
    <button
      type="button"
      className={clsx('hover:[&>svg]:fill-button', className)}
      onClick={onClick}
    >
      <Icon
        name="like"
        size={26}
        className={clsx({
          'fill-button': isActive,
        })}
      />
    </button>
  );
}
