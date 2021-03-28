import React from "react";
import { connect } from "react-redux";

import {
  cartItemsSelector,
  cartTotalSelector,
} from "../../redux/cart/cartSelector";
import { StripeButton } from "../../components/stripe-button/StripeButton";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";

import {
  CheckoutWrapper,
  CheckoutHeaderWrapper,
  CheckoutHeaderBlockWrapper,
  CheckoutTotalWrapper,
  CheckoutWarmingWrapper,
} from "./Checkout.styles";

const Checkout = ({ cartItems, total }) => {
  return (
    <CheckoutWrapper>
      <CheckoutHeaderWrapper>
        <CheckoutHeaderBlockWrapper>Product</CheckoutHeaderBlockWrapper>
        <CheckoutHeaderBlockWrapper>Description</CheckoutHeaderBlockWrapper>
        <CheckoutHeaderBlockWrapper>Quantity</CheckoutHeaderBlockWrapper>
        <CheckoutHeaderBlockWrapper>Price</CheckoutHeaderBlockWrapper>
        <CheckoutHeaderBlockWrapper>Remove</CheckoutHeaderBlockWrapper>
      </CheckoutHeaderWrapper>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <CheckoutTotalWrapper>TOTAL: ${total}</CheckoutTotalWrapper>
      <CheckoutWarmingWrapper>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 02/22 - CVV: 123
      </CheckoutWarmingWrapper>
      <StripeButton price={total} />
    </CheckoutWrapper>
  );
};

const mapStatetoProps = (state) => ({
  cartItems: cartItemsSelector(state),
  total: cartTotalSelector(state),
});

export default connect(mapStatetoProps)(Checkout);
