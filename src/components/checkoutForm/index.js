import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import StripeCheckout from 'react-stripe-checkout';

class CheckoutForm extends Component {


  async submit(ev) {
    let {token} = await this.props.stripe.createToken({name: "Name"});
      let response = await fetch("/charge", {
        method: "POST",
        headers: {"Content-Type": "text/plain"},
        body: token.id
      });

      if (response.ok) console.log("Purchase Complete!")
  }

  render() {
    return (
      <div className="checkout-btn">
          <StripeCheckout
            stripeKey="pk_test_mVLaP8FiAKVm0TfO3eONfCrg"

            amount="5000"
            label="Pay now with 💳"
          />
        </div>
        )
      }
}

export default CheckoutForm;
