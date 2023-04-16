import React, { useState } from "react";
import './Navbar.css';
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { Button } from "./Button";

function Navbar() {
    const {click , setClick}= useState(false);
    const {button, setButton}= useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton=() => {
        if(window.innerWidth <= 960){
            setButton(false)
        } else{
            setButton(true)
        }
    };

    window.addEventListener('resize',showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='/' className="navbar-logo">
                        MADO
                    </Link>
                    <div className="menubar">
                    <FiMenu/><i className={click ? 'fas fa-times':'fas fa-bars'}></i>
                    </div>
                    <ul className="click ? 'nav-menu active': 'nav-menu'">
                        <li className='nav-item'>
                            <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/services' className="nav-links" onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/products' className="nav-links" onClick={closeMobileMenu}>
                                Products
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-up' className="nav-links-mobile" onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}

                </div>
            </nav>
        </>
    );
}
export default Navbar;