import React from 'react';
import { Fragment } from 'react';

import './SuccessNotification.css';

class SuccessNotification extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <section id="success-notification">
                    <p id="success">{this.props.message}</p>
                </section>
            </Fragment>
        );
    }
}

export default SuccessNotification;