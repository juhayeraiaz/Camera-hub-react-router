import React from 'react';
import useReviews from '../../CustomHook/useReviews';

const Review = (props) => {
    const { name, body, ratings } = useReviews();
    return (
        <div>
            <h3>Name: {name}</h3>
            <h3>Comment: {body}</h3>
            <h3>Ratings: {ratings}</h3>
        </div>
    );
};

export default Review;