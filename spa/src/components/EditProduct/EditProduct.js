import React from 'react';
import { Fragment } from 'react';

import './EditProduct.css';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';

class EditProduct extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <Fragment>
                <Header />
                <h2 id="edit-product-heading">Edit product</h2>
                <form id="edit-form">
                    <div className="form-group">
                        <label htmlFor="product">Product name:</label>
                        <input id="product" type="text" className="form-control" name="product" value="" />
                    </div>
                    <div className="form-group">
                        <label for="description">Description:</label>
                        <textarea id="description" className="form-control" name="description"></textarea>
                    </div>
                    <div className="form-group">
                        <label for="imageUrl">Image url:</label>
                        <input type="text" className="form-control" name="imageUrl" value="" />
                    </div>
                    <div className="form-group">
                        <label for="price">Price:</label>
                        <input type="number" className="form-control" name="price" value="" />
                    </div>
                    <div className="form-group">
                        <label for="seller">Seller:</label>
                        <input type="text" className="form-control" name="seller" value="" />
                    </div>
                    <button type="submit" className="btn btn-primary">Edit</button>
                </form>
                <Footer />
            </Fragment>

        );
    }
}

export default EditProduct;