import React from 'react';
import { Redirect } from 'react-router-dom';
import { Fragment } from 'react';

import './DeleteProduct.css';

import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';

class DeleteProduct extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isDeleted: false,
        }
    }

    componentDidMount() {
        const productId = this.props.match.params.productId;

        let token = '';

        if (localStorage.getItem('user')) {
            token = JSON.parse(localStorage.getItem('user')).TOKEN;
        }

        fetch(`http://localhost:5000/api/product/${productId}/delete`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `${token}`,
            }
        })
            .then(response => response.json())
            .then(response => {
                if (!response.hasError) {
                    this.setState({ isDeleted: true });
                } else {
                    this.setState({ isDeleted: false });
                }
            })
            .catch(err => console.log(err));
    }

    render() {
        const { isDeleted } = this.state;

        if (isDeleted) {
            return (
                <Redirect to="/api/" />
            );
        }
        else {
            return (
                <Fragment>
                    <Header />
                    <div className="col-md-12" id="loading">
                        <h3>Loading...</h3>
                    </div>
                    <Footer />
                </Fragment>
            );
        }

    }

}

export default DeleteProduct;