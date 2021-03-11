import React from 'react';

class Login extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div>
                <h2 class="text-center">Please login:</h2>

                <form id="login-form" class="text-center border border-light p-5" action="" method="">
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input type="text" id="email" class="form-control" name="email" placeholder="Email" />
                    </div>
                    <div class="form-group">
                        <label for="password">Password:</label>
                        <input type="password" id="password" class="form-control" name="password" placeholder="Password" />
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary">Login</button>
                    </div>
                </form>
            </div >

        );
    }
}

export default Login;