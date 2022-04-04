import React from 'react';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Review.css'


const Review = (props) => {
    const { name, body, ratings, img } = props.review;
    return (
        <div className='mt-3'>
            <body>
                <main>
                    <section id="cards">
                        <div class="container py-2">
                            <div class="row justify-content-center">
                                <div class="col-lg-4 col-md-6 mb-4 pt-5">
                                    <div class="card shadow-sm border-0">
                                        <div class="card-body">
                                            <div class="user-picture">
                                                <img src={img} height={120} width={120} alt='' />
                                            </div>
                                            <div class="user-content">
                                                <h5 class="text-capitalize user-name">{name}</h5>
                                                <div class="small">
                                                    <Rating
                                                        initialRating={ratings}
                                                        emptySymbol={<FontAwesomeIcon icon={faStar} />}
                                                        fullSymbol={<FontAwesomeIcon style={{ color: 'rgb(255, 196, 0)' }} icon={faStar} />}
                                                        readonly
                                                    ></Rating>
                                                </div>
                                                <p class="small text-muted mb-0">{body}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </body>
        </div>
    );
};

export default Review;