import React, { Component } from 'react';
import './index.css';
import products from '../../products.js';

class ProductCard extends Component {
  render() {

    return (

      <div className="row top-margin-md">

      {
          this.props.products &&
            this.props.products.map( item =>
              <div className="col-md-4">
                            <div className="card" key={item.id}>
                              <div className="card-img-top"><img src="http://placehold.it/250x250" alt="Placeholder" className="card-img"></img></div>
                              <div className="card-title">{item.name}</div>
                              <div className="card-subtitle">${item.price.toFixed(2)}</div>
                              <div className="card-text">{item.desc}</div>
                              <div className="form-group">
                                <label htmlFor="sel1">Select Size:</label>
                                <select className="form-control" id="size">
                                {
                                    item.sizes &&
                                      item.sizes.map( size =>
                                        <option>{size}</option>

                                )}
                                </select>
                              </div>
                              <button className="btn btn-success" onClick={() => {this.props.addItem(item.id)}}>Add to Cart</button>
                            </div>
                        </div>

            )

        }


      </div>
    );
  }
}

export default ProductCard;
