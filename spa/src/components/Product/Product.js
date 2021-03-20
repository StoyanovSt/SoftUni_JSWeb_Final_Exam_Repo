import React from 'react';
import { Link } from 'react-router-dom';

import './Product.css';

class Product extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-md-4">
                <img src={this.props.product.imageUrl} className="rounded-circle" alt="" />
                <p>{this.props.product.product}</p>
                <p>Price: {this.props.product.price} lv/kg</p>
                <p>
                    <Link to={`/api/product/${this.props.product._id}/details`}>
                        <button type="button" className="btn btn-secondary">More info</button>
                    </Link>
                </p>
            </div>
        );
    }
}

export default Product;