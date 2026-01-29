import { getFeatureIconName } from '../../helpers/getFeatureIconName/getFeatureIconName';
import { capitalizeFirstLetter } from '../../helpers/capitalizeFirstLetter/capitalizeFirstLetter';
import Icon from '../Icon/Icon';
import { FEATURES_ICONS } from '../../constants/constants';

const FEATURE_DISPLAY_NAMES = {
  gas: 'Gas',
  AC: 'AC',
  automatic: 'Automatic',
  kitchen: 'Kitchen',
  TV: 'TV',
  bathroom: 'Bathroom',
  radio: 'Radio',
  microwave: 'Microwave',
  refrigerator: 'Refrigerator',
  water: 'Water',
  petrol: 'Petrol',
  diesel: 'Diesel',
  hybrid: 'Hybrid',
};

export default function FeaturesList({ data }) {
  const list = Object.keys(FEATURES_ICONS).reduce((acc, feature) => {
    // Handle "automatic" - check transmission field
    if (feature === 'automatic') {
      if (data.transmission === 'automatic') {
        acc.push(feature);
      }
    }
    // Handle engine types (petrol, diesel, hybrid)
    else if (
      feature === 'petrol' ||
      feature === 'diesel' ||
      feature === 'hybrid'
    ) {
      if (data.engine === feature) {
        acc.push(feature);
      }
    }
    // Handle regular boolean features
    else {
      if (data[feature]) {
        acc.push(feature);
      }
    }
    return acc;
  }, []);

  return (
    <ul className="flex flex-wrap gap-2">
      {list.map(feature => (
        <li
          key={feature}
          className={
            'flex items-center rounded-full py-3 px-[18px] font-medium bg-badges'
          }
        >
          {<Icon name={getFeatureIconName(feature)} className="mr-2" />}{' '}
          {FEATURE_DISPLAY_NAMES[feature] || capitalizeFirstLetter(feature)}
        </li>
      ))}
    </ul>
  );
}
