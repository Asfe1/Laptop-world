import React from 'react';
import useReviews from '../Hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    // custome hook
    const [reviews, setReviews] = useReviews([]);
    return (

        < div >
            <h1 className='mb-5'>Reviews <span style={{ color: 'rgb(236, 188, 16)' }}>({reviews.length})</span></h1>
            <div className='row  '>
                {
                    reviews.map(review => <Review key='review.id' review={review}></Review>)
                }
            </div>
            <br />

            <br />
        </div >

    );
};

export default Reviews;