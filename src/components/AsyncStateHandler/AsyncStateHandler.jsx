import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

export default function AsyncStateHandler({ isLoading, isError, children }) {
  if (isLoading) {
    return (
      <div className="flex justify-center py-20">
        <Spinner />
      </div>
    );
  }

  if (isError) {
    return <ErrorMessage message={isError} />;
  }

  return children;
}
