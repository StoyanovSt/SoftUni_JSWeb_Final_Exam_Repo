import React from 'react';
import { Fragment } from 'react';

import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Product from '../Product/Product.js';
import './Home.css';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            isLogged: localStorage.getItem('user') ? true : false,
        }
    }

    componentDidMount() {
        fetch('http://localhost:5000/api/')
            .then(res => res.json())
            .then(allProducts => {
                this.setState({ products: allProducts.products });
            })
            .catch(error => console.log(error));
    }

    render() {
        const { isLogged } = this.state;

        if (!isLogged) {
            return (
                <Fragment>
                    <Header />
                    <div className="guest-home">
                        <h1>Welcome to Healthy world!</h1>
                        <h2>The biggest online bee products marketplace</h2>
                        <img src="../../../images/sunflowers.jpg" className="rounded" id="guest-view" alt="Sunflowers" />
                    </div>
                    <Footer />
                </Fragment>
            );
        } else {
            if (this.state.products.length == 0) {
                return (
                    <Fragment>
                        <Header />
                        <div className="col-md-12" id="empty-container">
                            <h3>No products so far...</h3>
                        </div>
                        <Footer />
                    </Fragment>

                );
            } else {
                return (
                    <Fragment>
                        <Header />
                        <div className="products-container">
                            <div className="row bg-light">
                                {this.state.products.map(product => {
                                    return <Product key={product._id} data={product} />;
                                })}
                            </div>
                        </div>
                        <Footer />
                    </Fragment>
                );
            }

        }

    }
}

export default Home;

