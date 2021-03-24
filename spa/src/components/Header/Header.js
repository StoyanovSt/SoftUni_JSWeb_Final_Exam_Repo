import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLogged: localStorage.getItem('user') ? true : false,
            username: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).USERNAME : '',
        }
    }

    render() {
        const { isLogged } = this.state;

        if (isLogged) {
            return (
                <nav className="navbar navbar-expand-lg">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/api">
                                <button type="button" className="btn btn-light">Home</button>
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/api/product/create">
                                <button type="button" className="btn btn-light">Create product</button>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/api/user/profile">
                                <button type="button" className="btn btn-light">{this.state.username}'s profile</button>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/api/logout">
                                <button type="button" className="btn btn-light">Logout</button>
                            </Link>
                        </li>
                    </ul>
                </nav>
            );
        } else {
            return (
                <nav className="navbar navbar-expand-lg">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/api">
                                <button type="button" className="btn btn-light">Home</button>
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/api/register">
                                <button type="button" className="btn btn-light">Register</button>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/api/login">
                                <button type="button" className="btn btn-light">Login</button>
                            </Link>
                        </li>
                    </ul>
                </nav>
            );
        }
    }
}

export default Header;