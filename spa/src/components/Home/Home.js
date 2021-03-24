import React from 'react';
import { Fragment } from 'react';

import Product from '../Product/Product.js';
import './Home.css';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
        }
    }

    // componentDidMount() {
    //     fetch('http://localhost:5000/api/')
    //         .then(res => res.json())
    //         .then(allProducts => {
    //             this.setState({ products: allProducts });
    //         })
    //         .catch(error => console.log(error));
    // }

    render() {
        return (
            <Fragment>
                {/* if loggedIn */}

                <div className="products-container">
                    <div className="row bg-light">
                        {this.state.products.map(product => {
                            <Product
                                key={product._id}
                                data={product}
                            />
                        })}

                        {/* <div className="col-md-12" id="empty-container">
                            <h3>No products so far...</h3>
                        </div> */}
                    </div>
                </div>

                {/* else */}

                {/* <div className="guest-home">
                    <h1>Welcome to Healthy world!</h1>
                    <h2>The biggest online bee products marketplace</h2>
                    <img src="../../../images/sunflowers.jpg" className="rounded" id="guest-view" alt="Sunflowers" />
                </div> */}

                {/* if */}
            </Fragment>
        );
    }
}

export default Home;