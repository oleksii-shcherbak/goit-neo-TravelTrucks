import clsx from 'clsx';

export default function Button({
  children,
  variant = 'primary',
  className,
  isLoading = false,
  ...props
}) {
  return (
    <button
      className={clsx(
        'px-[60px] py-4 rounded-[200px] font-medium transition-colors',
        {
          'bg-button text-white hover:bg-button-hover': variant === 'primary',
          'border border-gray hover:border-button': variant === 'secondary',
          'opacity-50 cursor-not-allowed': isLoading || props.disabled,
        },
        className
      )}
      disabled={isLoading || props.disabled}
      style={
        props.disabled && variant === 'secondary'
          ? { borderColor: '#e0e0e0' }
          : undefined
      }
      {...props}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
}
