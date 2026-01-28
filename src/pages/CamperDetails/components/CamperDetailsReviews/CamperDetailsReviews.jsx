import { useSelector } from 'react-redux';
import { selectCamperData } from '../../../../redux/selectors';
import Stars from '../../../../components/Stars/Stars';

export default function CamperDetailsReviews() {
    const camper = useSelector(selectCamperData);

    if (!camper || !camper.reviews) return null;

    if (!camper.reviews.length) {
        return <p className="text-text">No reviews yet</p>;
    }

    return (
        <ul className="space-y-6 pr-6">
            {camper.reviews.map((review, index) => (
                <li key={index} className="pb-6 border-b last:border-b-0">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-[60px] h-[60px] rounded-full bg-badges flex items-center justify-center">
              <span className="text-h2 text-button">
                {review.reviewer_name.charAt(0)}
              </span>
                        </div>
                        <div>
                            <p className="text-h3 mb-1">{review.reviewer_name}</p>
                            <Stars rating={review.reviewer_rating} />
                        </div>
                    </div>
                    <p className="text-text">{review.comment}</p>
                </li>
            ))}
        </ul>
    );
}