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
            userInfo: {},
        }
    }

    componentDidMount() {
        fetch('http://localhost:5000/api/user/profile')
            .then(res => res.json())
            .then(currentUserInfo => {
                this.setState({ userInfo: currentUserInfo });
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <Fragment>
                <Header />
                <img src="../../../images/profile-pic.png" id="profile-picture" alt="Profile picture" />
                <p>Username: {this.state.userInfo.username}</p>
                <p>All available products:</p>
                <div className="row bg-light">
                    {this.state.userInfo.products.map(product => {
                        <Product
                            key={product._id}
                            data={product}
                        />
                    })}
                </div>
                <Footer />
            </Fragment>
        );
    }
}

export default UserProfile;