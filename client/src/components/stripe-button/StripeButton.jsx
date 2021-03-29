import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

export const StripeButton = ({ price }) => {
    const apiKey = 'pk_test_51GqH07H9z1SOQ8QDHgtspWTTcGcgy5BY6wJsVFpRdluMou5khOLXE7RuJ57nQ26TPHokqwtCfZxUbZf5kWblMXYg00wnAfW9ST';
    const priceForStripe = price * 100;

    const onToken = async (token) => {
        try {
            const res = await fetch('/payments', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({...token, amount: priceForStripe})
            })
            const data = await res.json();
            if (!data.success) new Error('Not resp')
            alert('Payment Succesful!');
        } catch (e) {
            console.log(e)
            alert('Payment Fail!');
        }
    };

    return (
        <StripeCheckout
            token={onToken}
            stripeKey={apiKey}
            amount={priceForStripe}
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            panelLabel='Pay Now'
        />
    )
}
