import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import icon from "../../asserts/Icon.svg"
import downarrow from "../../asserts/down-arrow.svg"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav-menu">
                <div className="icon-btn">
                    <img src={icon} alt="Icon" />
                    <p>ProperLand</p>
                </div>
                <div className='nav-box'>
                    <Link className='link' to="/">Home</Link>
                    <Link className='link' to="/">About</Link>
                    <Link className='link' to="/">Properties</Link>
                    <div className="link nav-item dropdown">
                        <span className="dropdown-btn">Pages <img src={downarrow} alt="Arrow" /></span>
                        <div className="dropdown-content">
                            <Link to="/about">About</Link>
                            <Link to="/contact">Contact</Link>
                        </div>
                    </div>
                    <Link className='link' to="/">Blog</Link>
                    <button className="contact-btn">Contact</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
