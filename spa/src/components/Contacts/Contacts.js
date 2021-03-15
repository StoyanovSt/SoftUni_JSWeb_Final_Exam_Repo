import React from 'react';
import { Fragment } from 'react';

import './Contacts.css';

class Contacts extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <Fragment>
                <h1 id="company-name">Healthy world Ltd.</h1>
                <h2 id="site-info">Our online marketplace gives you the opportunity to register an account, to offer products and also to contact with owners of other products of which you are interested.</h2>
                <img src="../../images/bee.png" id="bee-pic" alt="Bee" />
                
                <h3 id="additional-info-heading">You can find us on:</h3>
                <br />
                <div id="additional-info">
                    <h4>Email: healthy_world@abv.bg</h4>
                    <h4>Phone: 089* *** ***</h4>
                    <h4>Company address: 5 Industrialna st., Opaka, Bulgaria</h4>                  
                </div>
            </Fragment>
        );
    }
}

export default Contacts;