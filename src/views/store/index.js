import React, { Component } from 'react';
import './index.css';
import ProductCard from '../../components/productCard';
import products from '../../products.js';
import firebase from '../../firebase';
import CheckoutTable from '../../components/checkoutTable';

class Store extends Component {


  render() {
    console.log(this.props.amount)
    return (
      <div className="row">
        <div className="col-md-12">
          <ProductCard products={this.props.products} addItem={this.props.addItem} amount={this.props.amount} setSize={this.props.setSize} />


        </div>
      </div>
    );
  }
}

export default Store;
