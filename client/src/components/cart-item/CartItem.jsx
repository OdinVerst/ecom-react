import {CartItemDetailsStyle, CartItemNameStyle, CartItemStyle} from "./CartItem.styles";

export const CartItem = ({item}) => {
    const {imageUrl, name, quantity, price} = item;
    return (
        <CartItemStyle>
            <img src={imageUrl} alt={name}/>
            <CartItemDetailsStyle>
                <CartItemNameStyle>{name}</CartItemNameStyle>
                <span>${price} (x{quantity})</span>
            </CartItemDetailsStyle>
        </CartItemStyle>
    )
}
