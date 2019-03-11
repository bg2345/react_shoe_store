import React, { Component } from 'react';
import './index.css';
import CheckoutTable from '../../components/checkoutTable';
import CheckoutItem from '../../components/checkoutItem';
import products from '../../products.js';
import firebase from '../../firebase';
import StripeCheckout from 'react-stripe-checkout';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from '../../components/checkoutForm';


class Checkout extends Component {

  render() {

    return (
        <div className="container">
          <CheckoutTable cart={this.props.cart} removeItem={this.props.removeItem} countDuplicates={this.props.countDuplicates} count={this.props.count} duplicates={this.props.duplicates} amount={this.props.amount} size_select={this.props.size_select} setSize={this.props.setSize} curr_size={this.props.curr_size} />
          <CheckoutForm />

        </div>
    );
  }
}

export default Checkout;
