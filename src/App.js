import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header';
import Store from './views/store';
import Checkout from './views/checkout';
import products from './products.js';
import firebase from './firebase';
import StripeCheckout from 'react-stripe-checkout';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './components/checkoutForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      'products': [],
      'cart': [],
      'amount': 0,
      'duplicates': [],
      'curr_size': []
    }

    // upload products to firebase for reference
    firebase.database().ref('products').set(products);

  }

  componentWillMount() {
    // add firebase cart info to local cart
    const db = firebase.database().ref('cart');

    // loop through the database response
    db.on('value', response => {
      let data = response.val();

      let cart = [];
      let amount = 0;

      for (let i in data) {
        cart.push(data[i]);
      }

      // pus new cart variable into local state
      this.setState({ 'cart': cart });
    });

    this.setState({ 'products': products });
  }

  addItem = id => {
    let cart = this.state.cart;
    let size_select = document.getElementById('size').value;

    for (let i in products) {
          if (products[i].id === id){
            cart.push(products[i])
            for (let n in cart){
            cart[n].sizes.splice(0, cart[n].sizes.length, size_select)
            console.log(size_select)
            break;
          }
        }
        }

    this.calcTotal();
    this.setState({ 'cart': cart });

    // add new cart to firebase
    firebase.database().ref('cart').set(cart);



  }

  setSize = () => {
    let cart = this.state.cart;
    let size_select = document.getElementById('size').value;
    let curr_size = this.state.curr_size;

  }

  removeItem = id => {
    let cart = this.state.cart;

    for (let i in cart) {
      if (cart[i].id === id){
        cart.splice(i, 1);
        break;
      }
    }
    this.calcTotal();
    this.setState({ 'cart': cart });

    // add new cart to firebase
    firebase.database().ref('cart').set(cart);



  }

  calcTotal = () => {
  // get the value and parse from session storage
  let cart = this.state.cart;

  // define a total variable = 0
  let amount = 0;

    // loop through all items in the cart
  for (let i in cart) {
    amount += cart[i].price;

  }
      // add each items price to Total

    // return the total
    amount = amount.toFixed(2);

  this.setState({ 'amount': amount});
  }

  countDuplicates = id => {
  let cart = this.state.cart;
  let count = 0;

  for (let i in cart) {
    if (cart[i].id === id) {
      count += 1
    }
  }

  return count;
}

  render() {
    return (
      <div className="App">
        <Header />
      <div className="container">
        <Switch>
            <Route exact path='/' render={() => <Store products={this.state.products} addItem={this.addItem} amount={this.state.amount} setSize={this.setSize} curr_size={this.state.curr_size} />} />
            <Route exact path='/checkout' render={() => <Checkout amount={this.state.amount} cart={this.state.cart} removeItem={this.removeItem} countDuplicates={this.countDuplicates} count={this.state.count} duplicates={this.state.duplicates} size_select={this.state.size_select} setSize={this.setSize} curr_size={this.state.curr_size} />} />
        </Switch>
      </div>
      </div>
    );
  }
}

export default App;
