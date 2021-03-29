import React from 'react';
import { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';

import './ProductDetails.css';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Notification from '../Notification/Notification.js';

class ProductDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            product: {},
            currentLoggedUserId: '',
            currentLoggedUserName: '',
            likesCount: 0,
            isLikeProductButtonClicked: false,
            isCurrentUserAlreadyLikedTheProduct: false,
            redirectForDeletion: false,
            notificationForBuying: false,
            notificationMessage: '',
            notificationType: '',
        }
    }

    deleteProduct(e) {
        if (window.confirm("Are you sure that you want to delete this product?")) {
            this.setState((oldState) => ({
                redirectForDeletion: oldState.redirectForDeletion = true,
            }));
        }
    }

    buyProduct(e) {
        if (window.confirm("Are you sure that you want to buy this product?")) {
            this.setState((oldState) => ({
                notificationMessage: oldState.notificationMessage = 'You have bought the product!',
                notificationType: oldState.notificationType = 'success',
                notificationForBuying: oldState.notificationForBuying = true,
            }));

            setTimeout(() => {
                this.setState((oldState) => ({
                    redirectForDeletion: oldState.redirectForDeletion = true,
                }));
            }, 5000);
        }
    }


    likeProduct(e) {
        let countOfLikes = this.state.likesCount + 1;
        let currentUser = '';

        if (localStorage.getItem('user')) {
            currentUser = JSON.parse(localStorage.getItem('user')).USERNAME;
        }

        fetch(`http://localhost:5000/api/product/${this.props.match.params.productId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                countOfLikes,
                currentUser
            })
        })
            .then(response => response.json())
            .then(response => {
                console.log('OK');
            })
            .catch(err => console.log(err));

        this.setState((oldState) => ({
            likesCount: oldState.likesCount + 1,
            isLikeProductButtonClicked: oldState.isLikeProductButtonClicked = true,
        }));
    }

    componentDidMount() {
        let currentUser = '';

        if (localStorage.getItem('user')) {
            currentUser = JSON.parse(localStorage.getItem('user')).USERNAME;
        }

        fetch(`http://localhost:5000/api/product/${this.props.match.params.productId}`)
            .then(response => response.json())
            .then(response => {
                this.setState((oldState) => ({
                    likesCount: oldState.likesCount = response.product.likes,
                    isCurrentUserAlreadyLikedTheProduct: oldState.isCurrentUserAlreadyLikedTheProduct =
                        response.product.peopleLikedProduct.includes(currentUser) ? true : false,
                }));


            })
            .catch(err => console.log(err));

        let token = '';

        if (localStorage.getItem('user')) {
            token = JSON.parse(localStorage.getItem('user')).TOKEN;
        }

        fetch(`http://localhost:5000/api/product/${this.props.match.params.productId}/details`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `${token}`,
            }
        })
            .then(response => response.json())
            .then(response => {
                this.setState({
                    product: response.product,
                    currentLoggedUserId: response.currentLoggedUserId,
                    currentLoggedUserName: currentUser,
                });
            })
            .catch(err => console.log(err));
    }

    render() {
        if (this.state.redirectForDeletion) {
            return <Redirect to={`/api/product/${this.props.match.params.productId}/delete`} />;
        } else if (this.state.notificationForBuying) {
            return (
                <Fragment>
                    <Header />
                    <h1 id="product-name">{this.state.product.product}</h1>
                    <Notification message={this.state.notificationMessage} type={this.state.notificationType} />
                    <div className="col-md-12">
                        <img src={this.state.product.imageUrl} id="product-pic" className="img-thumbnail" />
                    </div>

                    <div className="col-md-12 text-center">
                        <p style={{ fontSize: "20px" }}><strong>Description:</strong></p>
                        <p style={{ fontSize: "17px" }}>{this.state.product.description}</p>
                        <p style={{ fontSize: "20px" }}><strong>Price:</strong><span style={{ fontSize: "17px" }}> {this.state.product.price} lv./kg </span></p>

                        <p id="buttons">
                            <button
                                onClick={(e) => this.likeProduct(e)}
                                type="button"
                                id="like-button"
                                style={{ display: this.state.isCurrentUserAlreadyLikedTheProduct ? 'none' : 'block' }}
                                className="btn btn-warning"
                                disabled={this.state.isLikeProductButtonClicked ? true : false}>
                                Like the product
                            </button>
                            <button
                                onClick={(e) => this.buyProduct(e)}
                                type="button"
                                className="btn btn-success" >
                                Buy product
                            </button>
                            <span style={{ color: "white" }}>-</span>
                            <span style={{ color: "white" }}>-</span>
                            <span>{this.state.likesCount} likes</span>
                        </p>
                    </div>
                    <Footer />
                </Fragment>
            );
        }

        if (this.state.currentLoggedUserName === 'ADMIN') {
            return (
                <Fragment>
                    <Header />
                    <h1 id="product-name">{this.state.product.product}</h1>
                    <div className="col-md-12">
                        <img src={this.state.product.imageUrl} id="product-pic" className="img-thumbnail" />
                    </div>

                    <div className="col-md-12">
                        <p style={{ fontSize: "20px" }}><strong>Description:</strong></p>
                        <p style={{ fontSize: "17px" }}>{this.state.product.description}</p>
                        <p style={{ fontSize: "20px" }}><strong>Price:</strong> <span style={{ fontSize: "17px" }}>{this.state.product.price} lv./kg</span></p>

                        <p id="buttons">
                            <button onClick={(e) => this.deleteProduct(e)} type="button" className="btn btn-danger">Delete</button>
                        </p>
                    </div>
                    <Footer />
                </Fragment>
            );
        } else if (this.state.currentLoggedUserId === this.state.product.seller) {
            return (
                <Fragment>
                    <Header />
                    <h1 id="product-name">{this.state.product.product}</h1>
                    <div className="col-md-12">
                        <img src={this.state.product.imageUrl} id="product-pic" className="img-thumbnail" />
                    </div>

                    <div className="col-md-12">
                        <p style={{ fontSize: "20px" }}><strong>Description:</strong></p>
                        <p style={{ fontSize: "17px" }}>{this.state.product.description}</p>
                        <p style={{ fontSize: "20px" }}><strong>Price:</strong> <span style={{ fontSize: "17px" }}>{this.state.product.price} lv./kg</span></p>

                        <p id="buttons">
                            <Link to={`/api/product/${this.props.match.params.productId}/edit`}>
                                <button type="button" className="btn btn-secondary">Edit</button>
                            </Link>
                            <span style={{ color: "white" }}>-</span>
                            <button onClick={(e) => this.deleteProduct(e)} type="button" className="btn btn-danger">Delete</button>
                        </p>
                    </div>
                    <Footer />
                </Fragment>
            );
        } else {
            return (
                <Fragment>
                    <Header />
                    <h1 id="product-name">{this.state.product.product}</h1>
                    <div className="col-md-12">
                        <img src={this.state.product.imageUrl} id="product-pic" className="img-thumbnail" />
                    </div>

                    <div className="col-md-12 text-center">
                        <p style={{ fontSize: "20px" }}><strong>Description:</strong></p>
                        <p style={{ fontSize: "17px" }}>{this.state.product.description}</p>
                        <p style={{ fontSize: "20px" }}><strong>Price:</strong><span style={{ fontSize: "17px" }}> {this.state.product.price} lv./kg </span></p>

                        <p id="buttons">
                            <button
                                onClick={(e) => this.likeProduct(e)}
                                type="button"
                                id="like-button"
                                style={{ display: this.state.isCurrentUserAlreadyLikedTheProduct ? 'none' : 'block' }}
                                className="btn btn-warning"
                                disabled={this.state.isLikeProductButtonClicked ? true : false}>
                                Like the product
                            </button>
                            <button
                                onClick={(e) => this.buyProduct(e)}
                                type="button"
                                className="btn btn-success" >
                                Buy product
                            </button>
                            <span style={{ color: "white" }}>-</span>
                            <span style={{ color: "white" }}>-</span>
                            <span>{this.state.likesCount} likes</span>
                        </p>
                    </div>
                    <Footer />
                </Fragment>
            );
        }

    }
}

export default ProductDetails;