import React from 'react';
import { Redirect } from 'react-router-dom';

import Notification from '../Notification/Notification.js';

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
                if (response.hasError) {
                    this.setState({ isDeleted: false });
                } else {
                    this.setState({ isDeleted: true });
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
                <Redirect to="/api/" />
            );
        }

    }

}

export default DeleteProduct;