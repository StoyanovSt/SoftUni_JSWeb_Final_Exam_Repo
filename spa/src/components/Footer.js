import React from 'react';

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
                            <a href="/contacts"></a>
                            </button>

                        </li>
                    </ul>
                </nav>
            </footer>
        );
    }
}

export default Footer;