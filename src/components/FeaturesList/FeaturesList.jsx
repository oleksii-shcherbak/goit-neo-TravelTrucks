import Icon from '../Icon/Icon';
import capitalizeFirstLetter from '../../helpers/capitalizeFirstLetter/capitalizeFirstLetter';
import getFeatureIconName from '../../helpers/getFeatureIconName/getFeatureIconName';

export default function FeaturesList({ features }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {features.map((feature, index) => (
        <li
          key={index}
          className="flex items-center gap-2 px-[18px] py-3 bg-badges rounded-[100px]"
        >
          <Icon name={getFeatureIconName(feature)} width={20} height={20} />
          <span>{capitalizeFirstLetter(feature)}</span>
        </li>
      ))}
    </ul>
  );
}
