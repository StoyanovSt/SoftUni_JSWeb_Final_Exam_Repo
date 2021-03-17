import React from 'react';
import { Fragment } from 'react';

import './UserProfile.css';

class UserProfile extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <Fragment>
                <div id="profile-picture-wrapper">
                    <img src="../../../images/profile-pic.png" id="profile-picture" alt="Profile picture" />
                </div>
                <div id="profile-info-wrapper">
                    <p>All articles:</p>
                    <p>.......................................................................</p>
                </div>
            </Fragment>
        );
    }
}

export default UserProfile;