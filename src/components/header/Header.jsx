import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";

import {
  HeaderContainer,
  LogoContainer,
  Logo,
  OptionsContainer,
  OptionDiv,
  OptionLink,
  ButtonSingOut,
} from "./Header.styles";

import { currentUderSelector } from "../../redux/user/userSelector";
import { cartHiddenSelector } from "../../redux/cart/cartSelector";

const Header = ({ login, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Link to="/">
          <Logo />
        </Link>
      </LogoContainer>
      <OptionsContainer>
        {login ? (
          <OptionDiv>
            {login.email}
            <ButtonSingOut
              onClick={() => {
                auth.signOut();
              }}
              className="reset-btn"
            >
              Sing Out
            </ButtonSingOut>
          </OptionDiv>
        ) : (
          <OptionLink to="/singin">Sing In</OptionLink>
        )}
        <OptionLink to="/shop">Shop</OptionLink>
        <OptionLink to="/shop">Contacts</OptionLink>
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = (state) => ({
  login: currentUderSelector(state),
  hidden: cartHiddenSelector(state),
});

export default connect(mapStateToProps, null)(Header);
