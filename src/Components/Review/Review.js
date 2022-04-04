import React from 'react';

const Review = (props) => {
    const { name, body, ratings } = props.review;
    return (
        <div className='mt-3'>
            <h4>Name: {name}</h4>
            <p className='fw-light'>{body}</p>
            <p className='fw-bold'>Ratings: {ratings}</p>
        </div>
    );
};

export default Review;