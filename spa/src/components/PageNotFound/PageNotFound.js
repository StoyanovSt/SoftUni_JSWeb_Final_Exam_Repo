import React from 'react';
import { Fragment } from 'react';

import './PageNotFound.css';

class PageNotFound extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <Fragment>
                <p id="page-not-found-message">Page not found!</p>
                <img src="../../images/page-not-found.jpg" id="page-not-found" alt="Page not found!" />
            </Fragment>
        );
    }
}

export default PageNotFound;