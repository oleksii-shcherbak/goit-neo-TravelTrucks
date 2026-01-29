import clsx from 'clsx';
import Icon from '../Icon/Icon';

export default function FilterButton({ icon, name, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      aria-pressed={isActive}
      aria-label={`Filter by ${name}`}
      className={clsx(
        'flex flex-col items-center justify-center font-medium',
        'w-[112px] h-[96px] rounded-xl',
        'border transition-colors duration-200',
        {
          'border-button': isActive,
          'hover:border-gray': !isActive,
        }
      )}
    >
      <Icon name={icon} size={32} className="mb-2" />
      {name}
    </button>
  );
}
