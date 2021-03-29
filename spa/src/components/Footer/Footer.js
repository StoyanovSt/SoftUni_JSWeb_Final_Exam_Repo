import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <footer>
                <nav className="navbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/api/contacts">
                                <button type="button" className="btn btn-light">Contacts and information</button>
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li>
                        &copy; 2020-2021 - Healthy world Ltd - All rights reserverd.
                        </li>
                    </ul>
                </nav>
            </footer>
        );
    }
}

export default Footer;