import React from 'react';
import { Fragment } from 'react';

import './ErrorNotification.css';

class ErrorNotification extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <section id="error-notification">
                    <p id="error">{this.props.message}</p>
                </section>
            </Fragment>
        );
    }
}

export default ErrorNotification;
