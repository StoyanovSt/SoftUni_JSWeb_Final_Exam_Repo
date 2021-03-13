import React from 'react';
import style from './UserProfile.module.css';

class UserProfile extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div className={style.userProfileWrapper}>
                <img src="../../images/profile-pic.png" className={style.profilePicture} alt="Profile picture" />
                <div>
                    <p>Name: ... </p>
                    <p>Phone: ... </p>
                    <p>E-mail: ... </p>                    
                </div>
            </div>
        );
    }
}

export default UserProfile;