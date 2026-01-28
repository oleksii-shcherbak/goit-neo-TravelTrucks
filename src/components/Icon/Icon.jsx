export default function Icon({
  name,
  width = 20,
  height = 20,
  className,
  ...props
}) {
  return (
    <svg width={width} height={height} className={className} {...props}>
      <use href={`/icons.svg#icon-${name}`}></use>
    </svg>
  );
}
