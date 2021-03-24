import React from 'react';
import { Fragment } from 'react';

import './PageNotFound.css';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';

class PageNotFound extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <Fragment>
                <Header />
                <p id="page-not-found-message">Page not found!</p>
                <img src="../../../images/page-not-found.jpg" id="page-not-found" alt="Page not found!" />
                <Footer />
            </Fragment>
        );
    }
}

export default PageNotFound;