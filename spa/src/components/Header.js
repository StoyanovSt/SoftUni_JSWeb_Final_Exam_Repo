import React from 'react';

class Header extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-ligth">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <button type="button" class="btn btn-light">Home
                            <a href="/"></a>
                        </button>
                    </li>
                </ul>

                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <button type="button" class="btn btn-light">Register
                            <a href="/register"></a>
                        </button>
                    </li>
                    <li class="nav-item">
                        <button type="button" class="btn btn-light">Login
                            <a href="/login"></a>
                        </button>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Header;