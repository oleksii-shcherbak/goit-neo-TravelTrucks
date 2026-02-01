import { useParams, useLocation } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Rating from '../../components/Rating/Rating';
import Price from '../../components/Price/Price';
import Location from '../../components/Location/Location';
import Tabs from '../../components/Tabs/Tabs';
import CamperDetailsGallery from './components/CamperDetailsGallery/CamperDetailsGallery';
import CamperDetailsContactForm from './components/CamperDetailsContactForm/CamperDetailsContactForm';
import { useDispatch, useSelector } from 'react-redux';
import { selectCamper } from '../../redux/selectors';
import { useEffect, useState } from 'react';
import { fetchCamper } from '../../redux/thunks';
import AsyncStateHandler from '../../components/AsyncStateHandler/AsyncStateHandler';
import CamperDetailsFeatures from './components/CamperDetailsFeatures/CamperDetailsFeatures';
import CamperDetailsReviews from './components/CamperDetailsReviews/CamperDetailsReviews';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const TABS = ['Features', 'Reviews'];

export default function CamperDetails() {
  const dispatch = useDispatch();
  const params = useParams();
  const location = useLocation();
  const { data, isLoading, error } = useSelector(selectCamper);
  const [activeTab, setActiveTab] = useState(
    location.state?.openReviews ? 'Reviews' : 'Features'
  );

  useDocumentTitle(
    data?.name
      ? `${data.name} - TravelTrucks`
      : 'Camper Details - TravelTrucks',
    data?.description || 'View detailed information about this camper'
  );

  useEffect(() => {
    dispatch(fetchCamper({ id: params.id }));
  }, [dispatch, params.id]);

  const handleReviewsClick = () => {
    setActiveTab('Reviews');
  };

  return (
    <>
      <Header />
      <div className="container mt-12 pb-20">
        <AsyncStateHandler isLoading={isLoading} isError={error}>
          {data ? (
            <>
              <h1 className="text-h2 mb-2">{data.name}</h1>
              <div className="flex item-center mb-4">
                <Rating
                  rating={data.rating}
                  totalReviews={data.reviews.length}
                  className="mr-4"
                  onClick={handleReviewsClick}
                />
                <Location location={data.location} />
              </div>
              <Price price={data.price} className="mb-[28px]" />
              <CamperDetailsGallery photos={data.gallery} />
              <p className="mt-[28px] text-text">{data.description}</p>

              <Tabs activeTab={activeTab} list={TABS} onChange={setActiveTab} />

              <div className="flex">
                <div className="flex-1">
                  {activeTab === 'Features' ? (
                    <CamperDetailsFeatures />
                  ) : (
                    <CamperDetailsReviews />
                  )}
                </div>
                <div className="w-[641px]">
                  <CamperDetailsContactForm />
                </div>
              </div>
            </>
          ) : null}
        </AsyncStateHandler>
      </div>
    </>
  );
}
