import React from 'react';
import { Link } from 'react-router-dom';

import './Product.css';

class Product extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div className="col-md-4">
                <img src="../../../images/honey-jar.jpg" className="rounded-circle" alt="Honey" />
                <p>Honey</p>
                <p>Price: 10 lv/kg</p>
                <p>
                    <Link to="/api/product/{productId}/details">
                        <button type="button" className="btn btn-secondary">More info</button>
                    </Link>
                </p>
            </div>
        );
    }
}

export default Product;