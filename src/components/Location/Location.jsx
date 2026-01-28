import Icon from '../Icon/Icon';

export default function Location({ location, className }) {
  return (
    <div className={className}>
      <Icon name="map" className="inline mr-1" />
      <span>{location}</span>
    </div>
  );
}
