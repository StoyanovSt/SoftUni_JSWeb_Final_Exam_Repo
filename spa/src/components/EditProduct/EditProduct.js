import React from 'react';
import { Fragment } from 'react';
import { Redirect } from 'react-router-dom';

import './EditProduct.css';

import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Notification from '../Notification/Notification.js';

class EditProduct extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentProduct: {},
            redirect: false,
            notificationMessage: '',
            notificationType: '',
        }
    }

    componentDidMount() {
        const productId = this.props.match.params.productId;

        let token = '';

        if (localStorage.getItem('user')) {
            token = JSON.parse(localStorage.getItem('user')).TOKEN;
        }

        fetch(`http://localhost:5000/api/product/${productId}/edit`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `${token}`,
            }
        })
            .then(response => response.json())
            .then(response => {
                if (response.hasError) {
                    this.setState((oldState) => ({
                        notificationMessage: oldState.notificationMessage = response.message,
                        notificationType: oldState.notificationType = 'error',
                    }));

                    setTimeout(() => {
                        this.setState((oldState) => ({
                            notificationMessage: oldState.notificationMessage = '',
                        }));
                    }, 5000);

                } else {
                    this.setState((oldState) => ({
                        currentProduct: oldState.currentProduct = response.product,
                    }));
                }
            })
            .catch(err => console.log(err));
    }

    onClickHandler(e) {
        e.preventDefault();

        const product = e.target.parentNode.product.value;
        const description = e.target.parentNode.description.value;
        const imageUrl = e.target.parentNode.imageUrl.value;
        const price = e.target.parentNode.price.value;
        const seller = this.state.currentProduct.seller;

        const productId = this.props.match.params.productId;

        let token = '';

        if (localStorage.getItem('user')) {
            token = JSON.parse(localStorage.getItem('user')).TOKEN;
        }

        fetch(`http://localhost:5000/api/product/${productId}/edit`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `${token}`,
            },
            body: JSON.stringify({
                product,
                description,
                imageUrl,
                price,
                seller
            })
        })
            .then(response => response.json())
            .then(response => {
                if (response.hasError) {
                    this.setState((oldState) => ({
                        notificationMessage: oldState.notificationMessage = response.message,
                        notificationType: oldState.notificationType = 'error',
                    }));

                    setTimeout(() => {
                        this.setState((oldState) => ({
                            notificationMessage: oldState.notificationMessage = '',
                        }));
                    }, 5000);

                } else {
                    this.setState((oldState) => ({
                        notificationMessage: oldState.notificationMessage = response.message,
                        notificationType: oldState.notificationType = 'success',
                    }));

                    setTimeout(() => {
                        this.setState({ redirect: true });
                    }, 5000);
                }
            })
            .catch(err => console.log(err));
    }

    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to={`/api/product/${this.props.match.params.productId}/details`} />;
        } else {
            return (
                <Fragment>
                    <Header />
                    <h2 id="edit-product-heading">Edit product</h2>
                    <Notification message={this.state.notificationMessage} type={this.state.notificationType} />
                    <form id="edit-form">
                        <div className="form-group">
                            <label htmlFor="product">Product name:</label>
                            <input type="text" id="product" className="form-control" name="product" defaultValue={this.state.currentProduct.product} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description:</label>
                            <textarea id="description" className="form-control" name="description" defaultValue={this.state.currentProduct.description}></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="imageUrl">Image url:</label>
                            <input type="text" id="imageUrl" className="form-control" name="imageUrl" defaultValue={this.state.currentProduct.imageUrl} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Price:</label>
                            <input type="number" id="price" className="form-control" name="price" defaultValue={this.state.currentProduct.price} />
                        </div>
                        <button onClick={(e) => this.onClickHandler(e)} type="submit" className="btn btn-primary">Edit</button>
                    </form>
                    <Footer />
                </Fragment>

            );
        }
    }
}

export default EditProduct;