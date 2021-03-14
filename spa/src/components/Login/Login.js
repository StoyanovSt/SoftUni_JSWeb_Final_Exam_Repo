import React from 'react';
import { Fragment } from 'react';

import './Login.css';

class Login extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <Fragment>
                <h2 id="register-heading">Please enter username and password:</h2>
                <form id="login-form" action="/login" method="POST">
                    <div className="form-group">
                        <label for="username">Username:</label>
                        <input type="text" id="username" className="form-control" name="username" placeholder="Username" />
                    </div>
                    <div className="form-group">
                        <label for="password">Password:</label>
                        <input type="password" id="password" className="form-control" name="password" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </Fragment >
        );
    }
}

export default Login;