import React from 'react';
import { Fragment } from 'react';

import './UserProfile.css';
import Product from '../Product/Product.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';

class UserProfile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                username: '',
                products: [],
            },
        }
    }

    componentDidMount() {
        let token = '';

        if (localStorage.getItem('user')) {
            token = JSON.parse(localStorage.getItem('user')).TOKEN;
        }

        fetch('http://localhost:5000/api/user/profile', {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `${token}`,
            }
        })
            .then(res => res.json())
            .then(response => {
                this.setState((oldState) => ({
                    userInfo: oldState.userInfo = response,
                }));

            })
            .catch(error => console.log(error));
    }

    render() {
        const userProducts = this.state.userInfo.products;

        if (userProducts.length == 0) {
            return (
                <Fragment>
                    <Header />
                    <img src="../../../images/profile-pic.png" id="profile-picture" alt="Profile picture" />
                    <h5 style={{ textAlign: "center"}}><strong>Username:</strong> {this.state.userInfo.username}</h5>
                    <h5 style={{ textAlign: "center" }}><strong>All available products:</strong> Current user has no products available!</h5>
                    <div className="row">
                        <img src="../../../images/sad-emoticon.png" id="sad-emoticon" alt="Profile picture" />
                    </div>
                    <Footer />
                </Fragment>
            );
        } else {
            return (
                <Fragment>
                    <Header />
                    <img src="../../../images/profile-pic.png" id="profile-picture" alt="Profile picture" />
                    <h5 style={{ textAlign: "center" }}><strong>Username:</strong> {this.state.userInfo.username}</h5>
                    <h5 style={{ marginLeft: "100px" }}><strong>All available products:</strong></h5>
                    <div className="row">
                        {userProducts.map(product => {
                            return <Product
                                key={product._id}
                                data={product}
                            />;
                        })}
                    </div>
                    <Footer />
                </Fragment>
            );
        }
    }
}

export default UserProfile;