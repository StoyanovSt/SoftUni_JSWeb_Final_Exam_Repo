import React from 'react';

class Login extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div>
                <h2 className="text-center">Please login:</h2>

                <form id="login-form" className="text-center border border-light p-5" action="/login" method="POST">
                    <div className="form-group">
                        <label for="email">Email:</label>
                        <input type="text" id="email" className="form-control" name="email" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <label for="password">Password:</label>
                        <input type="password" id="password" className="form-control" name="password" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div >

        );
    }
}

export default Login;