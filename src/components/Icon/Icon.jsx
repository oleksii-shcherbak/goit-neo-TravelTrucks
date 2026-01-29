import clsx from 'clsx';

export default function Icon({ name, size = 20, className, ...props }) {
  const defaultAttributes = {
    ...(className && {
      className: clsx(`icon-${name}`, className),
    }),
    ...(size !== 'auto' && { width: size, height: size }),
    role: 'presentation',
    ...(props['data-testid'] && {
      'data-testid': props['data-testid'],
    }),
    'aria-hidden': true,
  };

  const href = `/icons.svg#icon-${name}`;

  return (
    <svg {...defaultAttributes} focusable="false">
      <use href={href} />
    </svg>
  );
}
