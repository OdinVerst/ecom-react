import {connect} from 'react-redux';

import ButtonCustom from '../button-custom/ButtonCustom';
import {addToCart} from '../../redux/cart/cartActions';
import {
    CollectionItemFooterStyles, CollectionItemImgStyles,
    CollectionItemNameStyles,
    CollectionItemPriceStyles,
    CollectionItemStyles
} from "./CollectionItem.styles";

const CollectionItem = ({addToCart, ...item}) => {
    const {name, price, imageUrl} = item;
    return (
        <CollectionItemStyles>
            <CollectionItemImgStyles img={`url(${imageUrl})`}/>
            <CollectionItemFooterStyles>
                <CollectionItemNameStyles>{name}</CollectionItemNameStyles>
                <CollectionItemPriceStyles>{price}</CollectionItemPriceStyles>
            </CollectionItemFooterStyles>
            <ButtonCustom onClick={() => addToCart(item)} isInverse> Add to cart </ButtonCustom>
        </CollectionItemStyles>
    )
}

const mapDispatchToProps = {
    addToCart: addToCart
};

export default connect(null, mapDispatchToProps)(CollectionItem);
