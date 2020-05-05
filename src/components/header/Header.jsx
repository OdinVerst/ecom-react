import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/CartIcon';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import './Header.scss';
import { CartDropdown } from '../cart-dropdown/CartDropdown';

const Header = ({ login, hidden }) => {
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
                <CartIcon />
            </div>
            {hidden ? null : <CartDropdown />}
        </div>
    )
}

const mapStateToProps = state => ({
    login: state.user.user,
    hidden: state.cart.hidden
});


export default connect(mapStateToProps, null)(Header);
