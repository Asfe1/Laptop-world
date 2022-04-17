import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import CustomeLink from '../CustomeLink/CustomeLink';
import './Header.css'

const Header = () => {
    return (
        <div >
            <nav className="navbar navbar-expand-lg   navbar-light mb-4 ">
                <div className="container-fluid  ">
                    <NavLink id='nav-title' to='/home'>Laptop World</NavLink>
                    <button className="navbar-toggler mobile-button" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse justify-content-center option mt-2 me-lg-5 pe-lg-5 " id="navbarNav">
                        <CustomeLink className="pe-4 mb-4" to='/home'>HOME</CustomeLink>
                        <CustomeLink className="pe-4 mb-4" to='/reviews'>REVIEWS</CustomeLink>
                        <CustomeLink className="pe-4 mb-4" to='/dashboard'>DASHBOARD</CustomeLink>
                        <CustomeLink className="pe-4 mb-4" to='/blogs'>BLOGS</CustomeLink>
                        <CustomeLink className="pe-4 mb-4" to='/about'>ABOUT</CustomeLink>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;