import React from 'react';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Review = (props) => {
    const { name, body, ratings } = props.review;
    return (
        <div className='mt-3'>
            <h4>Name: {name}</h4>
            <p className='fw-light'>{body}</p>
            <Rating
                initialRating={ratings}
                emptySymbol={<FontAwesomeIcon icon={faStar} />}
                fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />}
                readonly
            ></Rating>
        </div>
    );
};

export default Review;