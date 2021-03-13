import React from 'react';

class Notification extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div className="notification-wrapper">
                <section className="notifications" id="successNotification">
                    <p className="notification-message" id="success">Successful!</p>
                </section>
                <section className="notifications" id="errorNotification">
                    <p className="notification-message" id="error">Error!</p>
                </section>
            </div>
        );
    }
}

export default Notification;