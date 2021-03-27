import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

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

import {currentUserSelector} from "../../redux/user/userSelector";
import {cartHiddenSelector} from "../../redux/cart/cartSelector";
import {singOutStart} from "../../redux/user/userActions";

const Header = ({login, hidden, singOut}) => {
    return (
        <HeaderContainer>
            <LogoContainer>
                <Link to="/">
                    <Logo/>
                </Link>
            </LogoContainer>
            <OptionsContainer>
                {login ? (
                    <OptionDiv>
                        {login.email}
                        <ButtonSingOut
                            onClick={() => {
                                singOut()
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
                <CartIcon/>
            </OptionsContainer>
            {hidden ? null : <CartDropdown/>}
        </HeaderContainer>
    );
};

const mapStateToProps = (state) => ({
    login: currentUserSelector(state),
    hidden: cartHiddenSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
    singOut: () => dispatch(singOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
