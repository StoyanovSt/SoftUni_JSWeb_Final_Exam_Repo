import React from 'react';
import { Fragment } from 'react';
import { Redirect} from 'react-router-dom';

import './Register.css';

class Register extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    registerUser(e){
        console.log(e);
        const username = e.target;
        const password = e.target;

        fetch('http://localhost:5000/api/register', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    password,
                })
            })
                .then(response => response.json())
                .then(data => {
                    localStorage.setItem('user', JSON.stringify(data));
                    <Redirect to="/api/login" />
                })
                .catch(err => console.error(err));
        
    }

    render() {
        return (
            <Fragment>
                <h2 id="register-heading">Please register an account:</h2>
                <form id="register-form" action="/api/register" method="POST">
                    <div className="form-group">
                        <label for="username">Username:</label>
                        <input type="text" id="username" className="form-control" name="username" placeholder="Username" />
                    </div>
                    <div className="form-group">
                        <label for="password">Password:</label>
                        <input type="password" id="password" className="form-control" name="password" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <label for="rePassword">Repeat Password:</label>
                        <input type="password" id="rePassword" className="form-control" name="rePassword" placeholder="Repeat Password" />
                    </div>
                    <button onClick={(e) => this.registerUser(e)} type="submit" className="btn btn-primary">Register</button>
                </form >
            </Fragment >
        );
    }
}

export default Register;