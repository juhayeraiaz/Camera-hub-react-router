import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='mt-4 header'>
            <Link className='mx-3 fs-5 text-decoration-none check' to="/home">Home</Link>
            <Link className='mx-3 fs-5 text-decoration-none check' to="/reviews">Reviews</Link>
            <Link className='mx-3 fs-5 text-decoration-none check' to="/dashboard">Dashboard</Link>
            <Link className='mx-3 fs-5 text-decoration-none check' to="/blogs">Blogs</Link>
            <Link className='mx-3 fs-5 text-decoration-none check' to="/about">About</Link>
        </nav >
    );
};

export default Header;