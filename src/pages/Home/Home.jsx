import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import styles from './Home.module.scss';

function Home() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/catalog');
  };

  return (
    <>
      <Helmet>
        <title>TravelTrucks - Campers of your dreams</title>
        <meta
          name="description"
          content="Find and rent the perfect camper for your next adventure. Browse our catalog of quality motorhomes and campers across Ukraine."
        />
      </Helmet>
      <Header />
      <Header />
      <div className={styles.wrapper}>
        <div className="container h-full flex flex-col justify-center">
          <h1 className="text-h1 text-white mb-4 max-w-[700px]">
            Campers of your dreams
          </h1>
          <p className="text-h2 text-white mb-10 max-w-[700px]">
            You can find everything you want in our catalog
          </p>
          <Button onClick={handleNavigate}>View Now</Button>
        </div>
      </div>
    </>
  );
}

export default Home;
