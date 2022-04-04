import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='mt-4 header d-flex flex-column flex-md-row justify-content-center'>
            <NavLink className='mx-3 fs-5 head-text'
                to="/home"
                style={({ isActive }) =>
                    (isActive ? { textDecoration: 'underline 5px' } : { textDecoration: 'none' })}
            >
                Home
            </NavLink>
            <NavLink className='mx-3 fs-5 head-text'
                to="/reviews"
                style={({ isActive }) =>
                    (isActive ? { textDecoration: 'underline 5px' } : { textDecoration: 'none' })}
            >
                Reviews
            </NavLink>
            <NavLink className='mx-3 fs-5 head-text'
                to="/dashboard"
                style={({ isActive }) =>
                    (isActive ? { textDecoration: 'underline 5px' } : { textDecoration: 'none' })}
            >
                Dashboard
            </NavLink>
            <NavLink className='mx-3 fs-5 head-text'
                to="/blogs"
                style={({ isActive }) =>
                    (isActive ? { textDecoration: 'underline 5px' } : { textDecoration: 'none' })}
            >
                Blogs
            </NavLink>
            <NavLink className='mx-3 fs-5 head-text'
                to="/about"
                style={({ isActive }) =>
                    (isActive ? { textDecoration: 'underline 5px' } : { textDecoration: 'none' })}
            >
                About
            </NavLink>

        </nav >
    );
};

export default Header;