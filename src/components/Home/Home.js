import React from 'react';
import img from './laptop1.png'
import './Home.css'
import useReviews from '../Hooks/useReviews';
import Review from '../Review/Review';
import { Link } from 'react-router-dom';

const Home = () => {
    // custome hook
    const [reviews, setReviews] = useReviews([]);
    return (
        <div>
            <div className='row mt-5'>
                <div className='col-lg-6 my-auto'>
                    <h1>A NEW CHAPTER IN GAMING <br />
                        <span id='title'>TRUE IMMERSION. EXTENDED DURABILITY.</span> </h1>

                    <p>ASUS TUF Gaming FX504 is a powerful Windows 10 laptop that combines immersive gaming with an extended lifespan that goes far beyond standard. The patented Anti-Dust Cooling (ADC) system ensures longevity and stable performance.</p>
                    <a href="https://github.com/Asfe1" target="_blank"><button className='button mt-5'>View Details</button></a>

                </div>
                <div className='col-lg-6 detail' >
                    <img className='w-75 mb-0 pb-0' src={img} alt="" />
                    <h2 id='name'>ASUS TUF Gaming FX504</h2>
                </div>

            </div>
            <div>
                <hr />
                <h1 className='py-5 review'>Reviews <span style={{ color: 'rgb(236, 188, 16)' }}>({reviews.length})</span></h1>

                <div className='row  '>
                    {
                        reviews.slice(0, 3).map(review => <Review key='review.id' review={review}></Review>)
                    }
                </div>
                <Link to='/reviews'><button className='button mt-5'>See All Reviews</button></Link>

                <br />
            </div>
        </div>

    );
};

export default Home;