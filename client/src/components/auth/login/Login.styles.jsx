import styled from 'styled-components';

export const LoginContainerStyles = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 820px) {
    width: 100%;
    max-width: 550px;
    margin: 0 auto 40px;
  }
`;