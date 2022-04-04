import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../utilites/Canon-EOS-R3.jpg'
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='d-block d-md-flex justify-content-between container mt-5'>
                <div className='mt-3 container text-start'>
                    <h1 className='header-text'>Welcome to <br /><span>Camera Hub</span></h1>
                    <p className='fw-light container mt-4 fs-5'>We are a camera selling company. You will get every best camera in our shop. We have options for everyone starting from <b>Low range</b> to <b>High range</b>.Our service is well recognised by our customers as you can check from the <b>Customer Reviews</b> section</p>
                    <button className='btn p-3 rounded-pill btn-outline-primary fw-bold mt-4 ms-3'>Learn More</button>
                </div>
                <div>
                    <img className='w-100 mt-5 mt-md-0' src={img} alt="" />
                </div>
            </div>
            <div>
                <h3 className='mt-5'>User Reviews(3)</h3>
                <Link className='text-decoration-none' to='/reviews'><button className='btn fw-bold btn-outline-primary p-3 mt-5'>See All Reviews</button></Link >

            </div>
        </div>

    );
};

export default Home;