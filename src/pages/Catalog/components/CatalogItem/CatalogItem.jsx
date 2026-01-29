import Button from '../../../../components/Button/Button';
import FeaturesList from '../../../../components/FeaturesList/FeaturesList';
import Rating from '../../../../components/Rating/Rating';
import Location from '../../../../components/Location/Location';
import Price from '../../../../components/Price/Price';
import LikeButton from '../../../../components/LikeButton/LikeButton';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  favoritesActions,
  selectFavorites,
} from '../../../../redux/favoritesSlice';

export default function CatalogItem({ item }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favorites = useSelector(selectFavorites);

  const handleNavigate = () => {
    navigate(`/catalog/${item.id}`);
  };

  const handleNavigateToReviews = () => {
    navigate(`/catalog/${item.id}`, { state: { openReviews: true } });
  };

  return (
    <div className="border rounded-[20px] p-6 mb-8 flex items-start">
      <div className="w-[292px] h-[320px] rounded-[10px] overflow-hidden mr-6">
        <img
          className="w-full h-full object-cover object-center"
          src={item.gallery[0].thumb}
          alt={`${item.name} - ${item.form} camper exterior view`}
          width={292}
          height={320}
        />
      </div>
      <div className="flex-1">
        <div className="flex mb-2 items-start">
          <h2
            className="text-h2 mr-auto cursor-pointer hover:text-button transition-colors"
            onClick={handleNavigate}
          >
            {item.name}
          </h2>
          <Price price={item.price} className="ml-2 mr-3" />
          <LikeButton
            onClick={() => dispatch(favoritesActions.toggleFavorite(item.id))}
            isActive={favorites.favoriteIds.includes(item.id)}
            className="relative -bottom-1"
          />
        </div>
        <div className="flex mb-6">
          <Rating
            rating={item.rating}
            totalReviews={item.reviews.length}
            className="mr-4"
            onClick={handleNavigateToReviews}
          />
          <Location location={item.location} />
        </div>
        <p className="truncate w-[525px] text-text mb-6">{item.description}</p>
        <FeaturesList data={item} />
        <Button onClick={handleNavigate} className="mt-6">
          Show more
        </Button>
      </div>
    </div>
  );
}
