import styled, { css } from 'styled-components';

const ButtonCustomStyle = css`
    background-color: black;
    color: white;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`;

const GoogleButtonStyle = css`
    background-color: #4285f4;
    color: white;

   &:hover {
        background-color: #357ae8;
        border: none;
        color: white;
   } 
`;

const InverseButtonStyle = css`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
    background-color: black;
    color: white;
    border: none;
    }
`;

const addCustomProps = (props) => {
    if(props.isGoogle) {
        return GoogleButtonStyle;
    }

    return props.isInverse ? InverseButtonStyle : ButtonCustomStyle;
};

export const ButtonCustomContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    cursor: pointer;
    display: flex;
    justify-content: center;
    border: none;

    ${addCustomProps}
`;