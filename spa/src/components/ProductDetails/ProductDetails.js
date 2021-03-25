import React from 'react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './ProductDetails.css';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';

class ProductDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            product: {},
        }
    }

    componentDidMount() {
        fetch(`http://localhost:5000/api/product/${this.props.match.params.productId}/details`)
            .then(response => response.json())
            .then(response => {
                this.setState({ product: response.product });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Fragment>
                <Header />
                <h1 id="product-name">{this.state.product.product}</h1>
                <div className="col-md-12">
                    <img src={this.state.product.imageUrl} id="product-pic" className="img-thumbnail" />
                </div>

                <div className="col-md-12 text-center">
                    <p><strong>Description:</strong></p>
                    <p>{this.state.product.description}</p>
                    <p><strong>Price:</strong> {this.state.product.price} lv./kg </p>

                    {/* if user is creator */}
                    <p id="buttons">
                        <Link to={`/api/product/${this.props.match.params.productId}/edit`}>
                            <button type="button" className="btn btn-secondary">Edit</button>
                        </Link>
                        <Link to={`/api/product/${this.props.match.params.productId}/detele`}>
                            <button type="button" className="btn btn-danger">Delete</button>
                        </Link>
                        {/* <Link to={`/api/product/${this.props.match.params.productId}/buy`}>
                            <button type="button" className="btn btn-success">Buy product</button>
                        </Link> */}
                    </p>
                </div>
                <Footer />
            </Fragment>
        );
    }
}

export default ProductDetails;