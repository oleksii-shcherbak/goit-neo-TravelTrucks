import { ColorRing } from 'react-loader-spinner';

export default function Spinner({ size = 80 }) {
  return (
    <ColorRing
      visible={true}
      height={size}
      width={size}
      ariaLabel="color-ring-loading"
      wrapperStyle={{}}
      wrapperClass="color-ring-wrapper"
      colors={['#E44848', '#E44848', '#E44848', '#E44848', '#E44848']}
    />
  );
}
