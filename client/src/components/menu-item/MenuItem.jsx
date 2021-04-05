import {withRouter} from 'react-router-dom';

import {
    MenuItemContentStyle,
    MenuItemImgBGStyle,
    MenuItemStyle,
    MenuItemSubtitleStyle,
    MenuItemTitleStyle
} from "./MenuItem.styles";

const MenuItem = (props) => {
    const {title, imageUrl, size, linkUrl, history, match} = props;
    return (
        <MenuItemStyle large={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <MenuItemImgBGStyle img={`url(${imageUrl})`}/>
            <MenuItemContentStyle>
                <MenuItemTitleStyle>{title}</MenuItemTitleStyle>
                <MenuItemSubtitleStyle>Shop now</MenuItemSubtitleStyle>
            </MenuItemContentStyle>
        </MenuItemStyle>
    )
}

export default withRouter(MenuItem);
