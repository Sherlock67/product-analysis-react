import React from 'react';
import useReview from '../../hook/useReview';
import Home from '../Home/Home';
import ReviewCard from '../ReviewCard/ReviewCard';
import './Review.css'
const Review = () => {
    const [reviews,setReview] = useReview();
    const path = window.location.pathname;
    const lastPath = path.substring(path.lastIndexOf('/') + 1);
    let length = reviews.length;
    if(lastPath === 'home' || !lastPath){
        length = 3;
    }
    
    return (

        <div className='container my-5'>
            <div className="row row-cols-1 row-cols-md-3 x-gutter">

                {
                    reviews.slice(0,length).map(r => <ReviewCard review = {r}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Review;