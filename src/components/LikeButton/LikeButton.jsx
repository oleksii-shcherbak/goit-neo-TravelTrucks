import { useDispatch, useSelector } from 'react-redux';
import Icon from '../Icon/Icon';
import { favoritesActions, selectFavorites } from '../../redux/favoritesSlice';

export default function LikeButton({ camperId, className }) {
  const dispatch = useDispatch();
  const { favoriteIds } = useSelector(selectFavorites);
  const isFavorite = favoriteIds.includes(camperId);

  const handleClick = () => {
    dispatch(favoritesActions.toggleFavorite(camperId));
  };

  return (
      <button
          onClick={handleClick}
          className={className}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          type="button"
      >
        <Icon
            name="heart"
            width={26}
            height={24}
            className={isFavorite ? 'fill-button text-button' : 'text-main'}
        />
      </button>
  );
}