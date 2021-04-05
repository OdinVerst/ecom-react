import styled, {css} from "styled-components";

const shrinkLabel = css`
  top: -14px;
  font-size: 12px;
  color: black;
`

export const FormInputLabelStyle = styled.span`
    color: gray;
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;

    ${props => props.shrink && shrinkLabel} 
`;

export const FormInputStyle = styled.input`
    background: white;
    color: grey;
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid grey;
    margin: 25px 0;

    &:focus {
      outline: none;
    }

    &:focus ~ ${FormInputLabelStyle} {
        ${shrinkLabel}
    }
`;

export const FormInputGroupStyle = styled.label`
  position: relative;
  margin: 45px 0;
  display: block;

  input[type="password"] {
    letter-spacing: 0.3em;
  }
`;

