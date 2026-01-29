import clsx from 'clsx';
import Stars from '../../../../components/Stars/Stars';
import { useSelector } from 'react-redux';
import { selectCamper } from '../../../../redux/selectors';

export default function CamperDetailsReviews() {
  const { data } = useSelector(selectCamper);

  if (!data.reviews.length) return 'No reviews yet';

  return (
    <ul className="mr-10">
      {data.reviews.map((review, idx) => (
        <li
          key={idx}
          className={clsx({
            'mb-[44px]': idx !== data.reviews.length - 1,
          })}
        >
          <div className="flex items-center mb-4">
            <div className="w-[60px] h-[60px] rounded-full bg-badges flex items-center justify-center text-button text-h2">
              {review.reviewer_name[0].toUpperCase()}
            </div>
            <div className="ml-4">
              <span className="font-medium">{review.reviewer_name}</span>
              <Stars rating={review.reviewer_rating} className="mt-1" />
            </div>
          </div>
          <p className="text-text">{review.comment}</p>
        </li>
      ))}
    </ul>
  );
}
