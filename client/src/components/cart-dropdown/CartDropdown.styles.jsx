import styled from 'styled-components';

export const CartDropdownStyle = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  button {
    margin-top: auto;
  }
`;

export const CartDropdownListStyle = styled.div`
  max-height: 258px;
  overflow: scroll;
`;

export const EmptyMessageStyle = styled.span`
  font-size: 18px;
  margin: 50px auto;
  display: inline-block;
  text-align: center;
  width: 100%;
`;
