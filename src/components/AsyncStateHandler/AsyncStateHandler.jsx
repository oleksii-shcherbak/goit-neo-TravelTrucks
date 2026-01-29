import { ColorRing } from 'react-loader-spinner';

export default function AsyncStateHandler({ children, isLoading, isError }) {
  if (isLoading) {
    return (
      <div className="flex flex-1 justify-center">
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={['#E44848', '#E44848', '#E44848', '#E44848', '#E44848']}
        />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center py-8 text-button">
        <p className="text-h3 mb-2">Oops! Something went wrong</p>
        <p className="text-text">
          {typeof isError === 'string'
            ? isError
            : 'Unable to load data. Please try again later.'}
        </p>
      </div>
    );
  }

  return children;
}
