import React from 'react';
import { Link } from 'react-router-dom';
import useReview from '../../hook/useReview';
import Home from '../Home/Home';
import ReviewCard from '../ReviewCard/ReviewCard';
import './Review.css'
const Review = () => {
    const [reviews,setReview] = useReview();
    const path = window.location.pathname;
    const lastPath = path.substring(path.lastIndexOf('/') + 1);
    let length = reviews.length;
    let seeMore ;
    
    if(lastPath === 'home' ||  !lastPath){
        length = 3;
        seeMore = <Link className="my-5 btn btn-primary"to="/review">See All</Link>

    }
    

    return (

        <div className='container my-5'>
            <div className="row row-cols-1 row-cols-md-3 x-gutter">

                {
                    reviews.slice(0,length).map(r => <ReviewCard review = {r}></ReviewCard>)

                }
            </div>
            {
                seeMore
            }
        </div>
    );
};

export default Review;