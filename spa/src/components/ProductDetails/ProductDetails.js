import React from 'react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './ProductDetails.css';

class ProductDetails extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <Fragment>
                <h1 id="product-name">Honey</h1>
                <div className="col-md-12">
                    <img className="img-thumbnail" src="../images/honey-jar.jpg" id="product-pic" alt="Пчелен мед" />
                </div>

                <div className="col-md-12 text-center">
                    <h3>Description:</h3>
                    <p>Продавам биологично чист пчелен мед. Година на производство - юни, 2021г.</p>
                    <p><strong>Price:</strong> 10 lv./kg </p>
                    <p><strong>Seller:</strong> Петко Петков</p>

                    {/* if user is creator */}
                    <p id="buttons">
                        <Link to="/api/product/{productId}/edit">
                            <button type="button" className="btn btn-secondary">Edit</button>
                        </Link>
                        <Link to="/api/product/{productId}/detele">
                            <button type="button" className="btn btn-danger">Delete</button>
                        </Link>
                        {/* <Link to="/api/product/{productId}/buy">
                            <button type="button" className="btn btn-success">Buy product</button>
                        </Link> */}
                    </p>
                </div>
            </Fragment>
        );
    }
}

export default ProductDetails;