import { useDispatch, useSelector } from 'react-redux';
import Icon from '../Icon/Icon';
import { toggleFavorite } from '../../redux/favoritesSlice';
import { selectIsFavorite } from '../../redux/selectors';

export default function LikeButton({ camperId, className }) {
  const dispatch = useDispatch();
  const isFavorite = useSelector(selectIsFavorite(camperId));

  const handleClick = () => {
    dispatch(toggleFavorite(camperId));
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
