import React from 'react';
import { Fragment } from 'react';

import './CreateProduct.css';

class CreateProduct extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <Fragment>
                <h2 id="create-product-heading">Create new product</h2>
                <form id="create-form" action="/product/create" method="POST">
                    <div className="form-group">
                        <label for="product">Product name:</label>
                        <input type="text" className="form-control" placeholder="Product name" name="product" />
                    </div>
                    <div className="form-group">
                        <label for="description">Description:</label>
                        <textarea className="form-control" placeholder="Description" name="description"></textarea>
                    </div>
                    <div className="form-group">
                        <label for="imageUrl">Image url:</label>
                        <input type="text" className="form-control" placeholder="Image Url" name="imageUrl" />
                    </div>
                    <div className="form-group">
                        <label for="price">Price:</label>
                        <input type="number" className="form-control" placeholder="Price" name="price" />
                    </div>
                    <div className="form-group">
                        <label for="seller">Seller:</label>
                        <input type="text" className="form-control" placeholder="Seller" name="seller" />
                    </div>
                    <button type="submit" className="btn btn-primary">Create</button>
                </form>
            </Fragment>
        );
    }
}

export default CreateProduct;