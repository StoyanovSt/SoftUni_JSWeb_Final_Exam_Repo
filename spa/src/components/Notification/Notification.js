import React from 'react';
import './Notification.css';

class Notification extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div className="notification-wrapper" >
                <section id="success-notification">
                    <p id="success">Successful message!</p>
                </section>
                <section id="error-notification">
                    <p id="error">Error message!</p>
                </section>
            </div>
        );
    }
}

export default Notification;