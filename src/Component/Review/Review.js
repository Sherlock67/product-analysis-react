import React from 'react';
import useReview from '../../hook/useReview';
import ReviewCard from '../ReviewCard/ReviewCard';
import './Review.css'
const Review = () => {
    const [reviews,setReview] = useReview()
   // console.log(reviews);
    return (
        <div className='container'>
            <div className="row row-cols-1 row-cols-md-3 x-gutter">

                {
                    reviews.map(r => <ReviewCard review = {r}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Review;