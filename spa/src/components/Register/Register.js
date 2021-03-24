import React from 'react';
import { Fragment } from 'react';
import { Redirect } from 'react-router-dom';

import './Register.css';
import Notification from '../Notification/Notification.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: false,
            notificationMessage: '',
            notificationType: '',
        }
    }

    onClickHandler(e) {
        e.preventDefault();

        const username = e.target.parentNode.username.value;
        const password = e.target.parentNode.password.value;
        const rePassword = e.target.parentNode.rePassword.value;

        fetch('http://localhost:5000/api/register', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password,
                rePassword,
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
                        // <Notification message="" />
                        this.setState({ redirect: true });
                    }, 5000);
                }
            })
            .catch(err => console.log(err));
    }


    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to="/api/login" />;
        } else {
            return (
                <Fragment>
                    <Header />
                    <h2 id="register-heading">Please register an account:</h2>
                    <Notification message={this.state.notificationMessage} type={this.state.notificationType} />
                    <form id="register-form">
                        <div className="form-group">
                            <label htmlFor="username">Username:</label>
                            <input type="text" id="username" className="form-control" name="username" placeholder="Username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" className="form-control" name="password" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="rePassword">Repeat Password:</label>
                            <input type="password" id="rePassword" className="form-control" name="rePassword" placeholder="Repeat Password" />
                        </div>
                        <button onClick={(e) => this.onClickHandler(e)} type="submit" className="btn btn-primary">Register</button>
                    </form >
                    <Footer />
                </Fragment >
            );
        }
    }
}

export default Register;