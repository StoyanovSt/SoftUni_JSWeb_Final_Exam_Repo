import React from 'react';
import { Fragment } from 'react';

import './EditProduct.css';

class EditProduct extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <Fragment>
                <h2 id="edit-product-heading">Edit product</h2>
                <form id="edit-form" action="/product/edit:productId" method="POST">
                    <div className="form-group">
                        <label for="product">Product name:</label>
                        <input type="text" className="form-control" name="product" value="" />
                    </div>
                    <div className="form-group">
                        <label for="description">Description:</label>
                        <textarea className="form-control" name="description"></textarea>
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
            </Fragment>

        );
    }
}

export default EditProduct;