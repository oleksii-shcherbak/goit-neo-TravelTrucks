import { useSelector } from 'react-redux';
import { selectCamper } from '../../../../redux/selectors';
import FeaturesList from '../../../../components/FeaturesList/FeaturesList';

export default function CamperDetailsFeatures() {
  const { data: camper } = useSelector(selectCamper);

  if (!camper) return null;

  // Collect features
  const features = [];

  // Add transmission
  if (camper.transmission) {
    features.push(camper.transmission);
  }

  // Add engine type
  if (camper.engine) {
    features.push(camper.engine);
  }

  // Add boolean features (equipment)
  const equipmentFeatures = [
    'AC',
    'bathroom',
    'kitchen',
    'TV',
    'radio',
    'refrigerator',
    'microwave',
    'gas',
    'water',
  ];
  equipmentFeatures.forEach(feature => {
    if (camper[feature]) {
      features.push(feature);
    }
  });

  return (
    <div className="pr-6">
      <FeaturesList features={features} />

      <div className="mt-[100px]">
        <h3 className="text-h3 mb-6 pb-6 border-b">Vehicle details</h3>
        <ul className="space-y-4">
          <li className="flex justify-between">
            <span className="text-text">Form</span>
            <span className="text-main font-medium">{camper.form}</span>
          </li>
          <li className="flex justify-between">
            <span className="text-text">Length</span>
            <span className="text-main font-medium">{camper.length}</span>
          </li>
          <li className="flex justify-between">
            <span className="text-text">Width</span>
            <span className="text-main font-medium">{camper.width}</span>
          </li>
          <li className="flex justify-between">
            <span className="text-text">Height</span>
            <span className="text-main font-medium">{camper.height}</span>
          </li>
          <li className="flex justify-between">
            <span className="text-text">Tank</span>
            <span className="text-main font-medium">{camper.tank}</span>
          </li>
          <li className="flex justify-between">
            <span className="text-text">Consumption</span>
            <span className="text-main font-medium">{camper.consumption}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
