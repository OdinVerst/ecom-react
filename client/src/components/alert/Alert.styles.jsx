import styled from 'styled-components';

export const AlertContainerStyles = styled.div`
  padding: 5px;
  width: 100%;
  display: flex;
  background: ${props => props.error ? 'tomato' : '#6ea2fb'};
  color: white;
  margin: 10px 0;
`