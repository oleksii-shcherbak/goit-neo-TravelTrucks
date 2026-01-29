import clsx from 'clsx';
import Spinner from '../Spinner/Spinner';

export default function Button({
  type = 'button',
  onClick,
  variant = 'primary',
  className,
  isLoading,
  disabled,
  children,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        'rounded-full py-4 px-14 font-medium inline-flex items-center justify-center transition-colors duration-300',
        {
          'bg-button hover:bg-button-hover text-white': variant === 'primary' && !disabled,
          'bg-white border text-main cursor-not-allowed': disabled,
          'bg-transparent border hover:border-button-hover':
            variant === 'secondary' && !disabled,
        },
        className
      )}
      style={disabled ? { borderColor: '#DADDE1' } : undefined}
      disabled={isLoading || disabled}
    >
      {children}
      {isLoading ? <Spinner size={24} /> : null}
    </button>
  );
}
