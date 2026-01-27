import clsx from 'clsx';
import Icon from '../Icon/Icon';

export default function FilterButton({
                                         name,
                                         icon,
                                         isActive,
                                         onClick,
                                         type = 'checkbox',
                                     }) {
    return (
        <button
            type="button"
            onClick={onClick}
            aria-pressed={isActive}
            aria-label={`Filter by ${name}`}
            className={clsx(
                'flex flex-col items-center justify-center gap-2 px-[22px] py-[17px] border rounded-[10px] transition-colors cursor-pointer',
                {
                    'border-button': isActive,
                    'border-gray/20 hover:border-button': !isActive,
                }
            )}
        >
            <Icon name={icon} width={32} height={32} />
            <span className="text-text">{name}</span>
        </button>
    );
}