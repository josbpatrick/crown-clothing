import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey= 'pk_test_51I7BrBKo6EgS7sYMj5W2Wm29bXGQG9QLGPQIUTaGjLOy5SLIYnHMX1gFiYlI7F3BDPxpnpIvcHzO3uFsHve7CCHn00Tw3GH6J6';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful!');
    };

return (
    <StripeCheckout
    label='Pay Now'
    name='CRWN Clothing Ltd.'
    billingAddress
    shippingAddress
    image='https://svgshare.com/i/CUz.svg'
    description={`Your total is $${price}`}
    amount={priceForStripe}
    panelLabel='Pay Now'
    token={onToken}
    stripeKey={publishableKey}
    />
);
};

export default StripeCheckoutButton;