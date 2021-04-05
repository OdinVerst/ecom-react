import styled, {css} from "styled-components";

export const CollectionItemFooterStyles = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const CollectionItemNameStyles = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const CollectionItemPriceStyles = styled.span`
  width: 10%;
`;

export const CollectionItemImgStyles = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;

  ${props => props.img && css`
    background-image: ${props.img};
  `}
`;

export const CollectionItemStyles = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    ${CollectionItemImgStyles} {
      opacity: 0.8;
    }
    
    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;