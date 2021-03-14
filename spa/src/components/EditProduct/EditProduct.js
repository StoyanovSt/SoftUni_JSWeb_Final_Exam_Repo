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
                <h2>Edit product</h2>
                <form action="/product/edit:productId" method="POST">
                    <div className="form-group">
                        <label for="product">Product name:</label>
                        <input type="text" className="form-control" placeholder="Product name" name="product" value="" />
                    </div>
                    <div className="form-group">
                        <label for="description">Description:</label>
                        <textarea className="form-control" placeholder="Description" name="description"></textarea>
                    </div>
                    <div className="form-group">
                        <label for="imageUrl">Image url:</label>
                        <input type="text" className="form-control" placeholder="Image Url" name="imageUrl" value="" />
                    </div>
                    <div className="form-group">
                        <label for="price">Price:</label>
                        <input type="number" className="form-control" placeholder="Price" name="price" value="" />
                    </div>
                    <div className="form-group">
                        <label for="seller">Seller:</label>
                        <input type="text" className="form-control" placeholder="Seller" name="seller" value="" />
                    </div>
                    <button type="submit" className="btn btn-primary">Edit</button>
                </form>
            </Fragment>

        );
    }
}

export default EditProduct;