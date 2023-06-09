import React, { useState, useEffect } from "react";
import './Navbar.css';
import { Link } from "react-router-dom";
import { FcMenu } from "react-icons/fc";
import { Button } from "./Button";

function Navbar() {
    const [ click, setClick ] = useState(false);
    const [ button, setButton ] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };
    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container" >
                    <Link to='/' className="navbar-logo">
                        MADO <i class='fab fa-typo3' />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <FcMenu /><i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/services' className="nav-links" onClick={closeMobileMenu}>
                                Shërbimet
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/products' className="nav-links" onClick={closeMobileMenu}>
                                Produktet
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