import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';

export default function NotFoundPage() {
  return (
    <>
      <Header />
      <div className="text-center pt-20">
        <h1 className="text-h1 mb-16">404 - Page not found</h1>
        <Link to="/" className="underline">
          Go home
        </Link>
      </div>
    </>
  );
}
