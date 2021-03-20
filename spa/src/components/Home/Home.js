import React from 'react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

class Home extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <Fragment>
                {/* if loggedIn */}

                {/* <div className="products-container">
                    <div className="row bg-light">
                        

                        <div className="col-md-12" id="empty-container">
                            <h3>No products so far...</h3>
                        </div>
                    </div>
                </div> */}

                {/* else */}

                <div className="guest-home">
                    <h1>Welcome to Healthy world!</h1>
                    <h2>The biggest online bee products marketplace</h2>
                    <img src="../../../images/sunflowers.jpg" className="rounded" id="guest-view" alt="Sunflowers" />
                </div>

                {/* if */}
            </Fragment>
        );
    }
}

export default Home;