import React, { Component } from 'react';
import './index.css';

class CheckoutTable extends Component {
  render() {


    return (
      <table id="cart" className="sampleTable">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Size</th>
            <th>Price</th>
            <th>Remove Product</th>
          </tr>
        </thead>
        <tbody>
        {
          this.props.cart &&
            this.props.cart.map( item =>
              <tr key={item.id}>
              <td>{this.props.count}</td>
              <td>{item.name}</td>
              <td>{item.sizes}</td>
              <td>{item.price}</td>
              <td>
                <button className="btn btn-danger"
                onClick={() => this.props.removeItem(item.id)}>Remove</button>
              </td>
              </tr>
            )

        }
        </tbody>
        <tfoot>
          <tr>
                  <td colSpan="1">Total:</td>

                  <td className="total">${this.props.amount}</td>
          </tr>
        </tfoot>
      </table>
    );
  }
}

export default CheckoutTable;
