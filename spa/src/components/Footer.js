import React from 'react';

class Footer extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <footer>
                <nav class="navbar">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <button type="button" class="btn btn-light">Contacts and information
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