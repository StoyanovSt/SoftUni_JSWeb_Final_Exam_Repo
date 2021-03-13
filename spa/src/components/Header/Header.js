import React from 'react';
import './Header.css';

class Header extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <nav className="navbar navbar-expand-lg">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <button type="button" className="btn btn-light">Home
                            <a href="/"></a>
                        </button>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <button type="button" className="btn btn-light">Register
                            <a href="/register"></a>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button type="button" className="btn btn-light">Login
                            <a href="/login"></a>
                        </button>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Header;