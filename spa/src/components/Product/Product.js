import React from 'react';
import { Link } from 'react-router-dom';

import './Product.css';

class Product extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-md-3">
                <img src={this.props.data.imageUrl} className="rounded-circle"/>
                <p>{this.props.data.product}</p>
                <p>Price: {this.props.data.price} lv/kg</p>
                <p>
                    <Link to={`/api/product/${this.props.data._id}/details`}>
                        <button type="button" id="more-info-btn" className="btn btn-secondary">More info</button>
                    </Link>
                </p>
            </div>
        );
    }
}

export default Product;