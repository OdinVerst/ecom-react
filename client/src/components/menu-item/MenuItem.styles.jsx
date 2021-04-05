import styled, {css} from "styled-components";

export const MenuItemImgBGStyle = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;

  ${props => props.img && css`
    background-image: ${props.img};
  `}
`;

export const MenuItemContentStyle = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;

`;


export const MenuItemTitleStyle = styled.div`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
  text-transform: uppercase;
`;

export const MenuItemSubtitleStyle = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;

export const MenuItemStyle = styled.a`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  ${props => props.large && css`
    height: 380px;
  `}
  
  &:hover {
    ${MenuItemImgBGStyle} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    ${MenuItemContentStyle} {
      opacity: 0.9;
    }
  }
`;