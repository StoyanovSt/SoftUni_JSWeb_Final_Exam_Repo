import React from 'react';
import { Fragment } from 'react';
import { Redirect } from 'react-router-dom';

import './CreateProduct.css';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Notification from '../Notification/Notification.js';

class CreateProduct extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: false,
            notificationMessage: '',
            notificationType: '',
            unauthorized: false,
        }
    }

    onClickHandler(e) {
        e.preventDefault();

        const product = e.target.parentNode.product.value;
        const description = e.target.parentNode.description.value;
        const imageUrl = e.target.parentNode.imageUrl.value;
        const price = e.target.parentNode.price.value;

        let token = '';

        if (localStorage.getItem('user')) {
            token = JSON.parse(localStorage.getItem('user')).TOKEN;
        }

        fetch('http://localhost:5000/api/product/create', {
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

                        if (response.unauthorized) {
                            this.setState((oldState) => ({
                                unauthorized: oldState.unauthorized = true,
                            }));
                        }
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
        const { unauthorized } = this.state;

        if (redirect) {
            return <Redirect to="/api/" />;
        } else if (unauthorized) {
            return <Redirect to="/api/login" />;
        } else {
            return (
                <Fragment>
                    <Header />
                    <h2 id="create-product-heading">Create new product</h2>
                    <Notification message={this.state.notificationMessage} type={this.state.notificationType} />
                    <form id="create-form">
                        <div className="form-group">
                            <label htmlFor="product">Product name:</label>
                            <input type="text" id="product" className="form-control" placeholder="Product name" name="product" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">
                                Description:
                            <br />
                            (please add an e-mail address in the description below in order to help other users to contact you)
                        </label>
                            <textarea
                                id="description"
                                className="form-control"
                                placeholder="Description" 
                                name="description">
                            </textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="imageUrl">Image url:</label>
                            <input type="text" id="imageUrl" className="form-control" placeholder="Image Url" name="imageUrl" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Price per kg:</label>
                            <input type="number" id="price" className="form-control" placeholder="Price" name="price" />
                        </div>
                        <button onClick={(e) => this.onClickHandler(e)} type="submit" className="btn btn-primary">Create</button>
                    </form>
                    <Footer />
                </Fragment>
            );
        }
    }
}

export default CreateProduct;