import styled from "styled-components";

export const CheckoutWrapper = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  @media (max-width: 1024px) {
    margin: 0;
    width: 100%;
    max-width: 650px;
  }
`;

export const CheckoutHeaderWrapper = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const CheckoutHeaderBlockWrapper = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
    flex-grow: 0;
  }

  @media (max-width: 1024px) {
    text-align: center;
    width: auto;
    flex-grow: 1;

    &:last-child {
      width: auto;
    }
  }
`;

export const CheckoutTotalWrapper = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;

  @media (max-width: 625px) {
    font-size: 25px;
  }
`;

export const CheckoutSpriteWrapper = styled.div`
  margin-left: auto;
  margin-top: 50px;
`;

export const CheckoutWarmingWrapper = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 24px;
  color: red;


  @media (max-width: 625px) {
    font-size: 19px;
  }
`;