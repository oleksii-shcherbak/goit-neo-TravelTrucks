import clsx from 'clsx';

export default function Price({ price, className }) {
  return (
    <strong className={clsx('text-h2 inline-block', className)}>
      €{price},00
    </strong>
  );
}
