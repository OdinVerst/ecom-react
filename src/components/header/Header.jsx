import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';
import { ReactComponent as Logo } from './logo.svg';

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <Link to='/'>
                    <Logo className="logo" />
                </Link>
            </div>
            <div className="options">
                <Link className="option" to="/shop">Shop</Link>
                <Link className="option" to="/shop">Contacts</Link>
            </div>
        </div>
    )
}

export default Header;
