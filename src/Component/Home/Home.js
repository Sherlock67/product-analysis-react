import React from 'react';
import './Home.css';
import logo from '../../resources/d1918h-01-500x500.jpg'
const Home = () => {
    return (
        <div className='row '>
            <div className='col-12 col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center'>
               
                    <h2 className='mt-5' >We save your Eyes</h2>
                    <p className=''>We save life </p>
           
              
                
            </div>
            <div className='col-12 col-lg-6 order-1 order-lg-2'>
                <img className="img-fluid  " src={logo} alt=''/>
            </div>
        </div>
    );
};

export default Home;