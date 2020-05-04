import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';
import { CardIcon } from '../cart-icon/CardIcon';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import './Header.scss';

const Header = ({login}) => {
    return (
        <div className="header">
            <div className="logo-container">
                <Link to='/'>
                    <Logo className="logo" />
                </Link>
            </div>
            <div className="options">
                {login ? 
                    <span className="option">{login.email} <button onClick={()=> { auth.signOut(); }} className="reset-btn singout-btn">Sing Out</button></span> : 
                    <Link className="option" to="/singin">Sing In</Link>
                }
                <Link className="option" to="/shop">Shop</Link>
                <Link className="option" to="/shop">Contacts</Link>
                <CardIcon />
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    login: state.user.user
});

export default connect(mapStateToProps)(Header);
