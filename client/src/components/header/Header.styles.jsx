import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { ReactComponent as LogoImage } from '../../assets/logo.svg';

const OptionContainerStyles = css`
    padding: 10px 15px;
    text-transform: uppercase;
    color: initial;
    text-decoration: none;

  @media (max-width: 400px){
    padding: 10px;
  }
`;

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 25px;
`;

export const HeaderUserEmail = styled.span`
  @media (max-width: 625px) {
    display: none;
  }
`;

export const LogoContainer = styled.div``;

export const Logo = styled(LogoImage)`
    width: 50px;
    height: 39px;
`;

export const OptionsContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const OptionDiv = styled.div`
    ${OptionContainerStyles}
`;

export const OptionLink = styled(Link)`
    ${OptionContainerStyles}
`;

export const ButtonSingOut = styled.button`
    margin-left: 10px;
    color: gray;
`;



