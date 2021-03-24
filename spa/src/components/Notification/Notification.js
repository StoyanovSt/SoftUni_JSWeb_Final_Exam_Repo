import React from 'react';
import { Fragment } from 'react';

import SuccessNotification from './SuccessNotification/SuccessNotification.js';
import ErrorNotification from './ErrorNotification/ErrorNotification.js';

class Notification extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            this.props.type == 'success' ?
                <SuccessNotification message={this.props.message} /> :
                <ErrorNotification message={this.props.message} />
        );
    }
}

export default Notification;