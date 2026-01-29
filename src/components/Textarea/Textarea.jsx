import clsx from 'clsx';

export default function Textarea({ field, ...props }) {
  return (
    <textarea
      {...field}
      {...props}
      className={clsx(
        'block w-full bg-inputs p-[18px] h-[118px] rounded-xl resize-none placeholder:text-gray text-main border border-transparent focus:border-button focus:outline-none focus:ring-0 transition-colors',
        props.className
      )}
    />
  );
}
