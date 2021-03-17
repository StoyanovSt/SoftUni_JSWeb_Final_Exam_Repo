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
                            <button type="button" className="btn btn-light">Contacts and information
                                <Link to="/api/contacts"></Link>
                            </button>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li>
                            Healthy world Ltd.
                        </li>
                    </ul>
                </nav>
            </footer>
        );
    }
}

export default Footer;