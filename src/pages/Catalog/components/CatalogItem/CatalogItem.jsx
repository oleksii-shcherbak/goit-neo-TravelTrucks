import { Link } from 'react-router-dom';
import Price from '../../../../components/Price/Price';
import Location from '../../../../components/Location/Location';
import Rating from '../../../../components/Rating/Rating';
import Button from '../../../../components/Button/Button';
import LikeButton from '../../../../components/LikeButton/LikeButton';

export default function CatalogItem({ item }) {
    const mainImage = item.gallery?.[0]?.thumb || '';

    return (
        <div className="flex gap-6 p-6 border rounded-[20px] mb-8">
            <div className="w-[292px] h-[320px] flex-shrink-0">
                <img
                    src={mainImage}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-[10px]"
                />
            </div>

            <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                    <h2 className="text-h2">{item.name}</h2>
                    <div className="flex items-center gap-2">
                        <Price price={item.price} />
                        <LikeButton camperId={item.id} />
                    </div>
                </div>

                <div className="flex items-center gap-4 mb-6">
                    <Rating
                        rating={item.rating}
                        totalReviews={item.reviews.length}
                    />
                    <Location location={item.location} />
                </div>

                <p className="text-text mb-6 line-clamp-1">
                    {item.description}
                </p>

                <div className="mb-6">
                    <p className="text-gray">Features available</p>
                </div>

                <Link to={`/catalog/${item.id}`} target="_blank">
                    <Button>Show more</Button>
                </Link>
            </div>
        </div>
    );
}