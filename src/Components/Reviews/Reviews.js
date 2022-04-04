import React from 'react';
import useReviews from '../../CustomHook/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews] = useReviews([]);
    return (
        <div>
            <h1 className='mt-5' style={{ color: '#3944F7' }}>Customer Reviews</h1>
            <h1 className='mt-3 fs-4' style={{ color: '#0d0f3c' }}>Number of reviews: {reviews.length}</h1>
            <div>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        product={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;