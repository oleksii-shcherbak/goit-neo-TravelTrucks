import clsx from 'clsx';

export default function Input({ icon, isError, ...props }) {
  const hasIcon = !!icon;

  const input = (
    <input
      {...props}
      className={clsx(
        'block w-full bg-inputs h-[60px] rounded-xl placeholder:text-gray text-main border transition-colors',
        {
          'border-button': isError,
          'border-transparent focus:border-button': !isError,
          'p-[18px]': !hasIcon,
          'py-[18px] pr-[18px] pl-[46px]': hasIcon,
        },
        'focus:outline-none focus:ring-0',
        props.className
      )}
    />
  );

  if (hasIcon) {
    return (
      <div className="relative">
        <span className="absolute left-[18px] top-1/2 -translate-y-1/2 pointer-events-none">
          {icon}
        </span>
        {input}
      </div>
    );
  }

  return input;
}
