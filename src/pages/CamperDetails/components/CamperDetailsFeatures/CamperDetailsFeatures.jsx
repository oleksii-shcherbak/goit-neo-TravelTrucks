import clsx from 'clsx';
import FeaturesList from '../../../../components/FeaturesList/FeaturesList';
import { useSelector } from 'react-redux';
import { selectCamper } from '../../../../redux/selectors';

export default function CamperDetailsFeatures() {
  const { data } = useSelector(selectCamper);

  const INFO = [
    {
      label: 'Form',
      value: data.form,
    },
    {
      label: 'Length',
      value: data.length,
    },
    {
      label: 'Width',
      value: data.width,
    },
    {
      label: 'Height',
      value: data.height,
    },
    {
      label: 'Tank',
      value: data.tank,
    },
    {
      label: 'Consumption',
      value: data.consumption,
    },
  ];

  return (
    <div className="bg-inputs rounded-[10px] py-[44px] px-[52px] mr-10">
      <FeaturesList data={data} />
      <h3 className="text-h3 mt-[100px]">Vehicle details</h3>
      <hr className="my-6" />
      <ul>
        {INFO.map(({ label, value }, idx) => (
          <li
            key={label}
            className={clsx('flex justify-between', {
              'mb-4': idx !== INFO.length - 1,
            })}
          >
            <span>{label}</span>
            <span>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
