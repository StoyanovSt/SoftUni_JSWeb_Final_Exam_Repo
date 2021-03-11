import React from 'react';

class Register extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div>
                <h2 className="text-center">Please register an account:</h2>

                <form id="register-form" className="text-center border border-light p-5" action="/register" method="POST">
                    <div className="form-group">
                        <label for="email">Email:</label>
                        <input type="text" id="email" className="form-control" name="email" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <label for="password">Password:</label>
                        <input type="password" id="password" className="form-control" name="password" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <label for="rePassword">Repeat Password:</label>
                        <input type="password" id="rePassword" className="form-control" name="rePassword" placeholder="Repeat Password" />
                    </div>
                    <div className="form-group">
                        <button type="button" className="btn btn-primary">Register</button>
                    </div>
                </form >
            </div >

        );
    }
}

export default Register;