import React from 'react';
import { Fragment } from 'react';

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
                    <p>Продавам биологично чист пчелен мед. Година на производство - юни, 2021г. </p>
                    <p><strong>Price:</strong> 10 lv./kg </p>
                    <p><strong>Seller:</strong> Петко Петков</p>
                    <p><strong>Email:</strong>...</p>

                    {/* if user is creator */}
                    <p id="buttons">
                        <a className="btn btn-secondary" href="/product/edit">Edit</a>
                        <a className="btn btn-danger" href="/product/delete">Delete</a>
                        {/* <a className="btn btn-success" href="/product/buy">Buy product</a> */}
                    </p>
                </div>
            </Fragment>
        );
    }
}

export default ProductDetails;