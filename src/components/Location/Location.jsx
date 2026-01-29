import Icon from '../Icon/Icon';

export default function Location({ location }) {
  return (
    <div className="flex items-center">
      <Icon name="map" className="mr-1" size={16} /> {location}
    </div>
  );
}
