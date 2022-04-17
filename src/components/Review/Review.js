import React from 'react';
import './Review.css'
import Rating from 'react-rating';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Review = (props) => {
    const { name, body, ratings, image } = props.review
    return (


        <div className='col-lg-5 con mx-auto '>
            <div className='  justify-content-center my-auto heading'>
                <img className='rounded-pill img  ' src={image} alt="" />
                <h2 className='align-self-center mt-2 mb-0 pb-0'> {name}</h2>
            </div>
            <hr />
            <p>{body}</p>
            <hr />
            <div className='mb-3'>
                <Rating
                    initialRating={ratings}
                    emptySymbol={<FontAwesomeIcon icon={faStar} />}
                    fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />}
                    readonly
                ></Rating>
            </div>

        </div>

    );
};

export default Review;