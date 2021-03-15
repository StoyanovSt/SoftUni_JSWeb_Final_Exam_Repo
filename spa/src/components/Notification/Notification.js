import React from 'react';
import { Fragment } from 'react';

import './Notification.css';

class Notification extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <Fragment>
                <section id="success-notification">
                    <p id="success">Successful message!</p>
                </section>
                <section id="error-notification">
                    <p id="error">Error message!</p>
                </section>
            </Fragment>
        );
    }
}

export default Notification;