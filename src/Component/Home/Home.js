import React from 'react';
import './Home.css';
import logo from '../../resources/d1918h-01-500x500.jpg'
const Home = () => {
    return (
        <div className='container'>
                   <div className='row '>
            <div className='col-12 col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center'>
               
                    <h2 className='mt-5 fs-1 text-start text-success fw-bolder'>We save your Eyes and MONEY</h2>
                    <p className='text-primary fs-5 text-start  '> We eliminated the distractions around the screen so you can focus on what's happening on the screen. From FreeSync to curved ultra-wide 4K in nearly bezel-less frames. </p>  
            </div>
            <div className='col-12 col-lg-6 order-1 order-lg-2'>
                <img className="img-fluid  " src={logo} alt=''/>
            </div>
        </div>
        </div>
 
    );
};

export default Home;