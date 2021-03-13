import React from 'react';
import { Fragment } from 'react';

import './Home.css';

class Home extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <Fragment>
                {/* if loggedIn */}

                <div className="products-container">
                    <div className="row bg-light">
                        <div className="col-md-4">
                            <img src="../../images/honey-jar.jpg" className="rounded-circle" alt="Honey" />
                            <p>Honey</p>
                            <p>Price: 10 lv/kg</p>
                            <p>
                                <a href="/details/product/productId">
                                    <button type="button" className="btn btn-secondary">More info</button>
                                </a>
                            </p>
                        </div>
                        <div className="col-md-4">
                            <img src="../../images/propolis.jpg" className="rounded-circle" alt="Propolis" />
                            <p>Propolis</p>
                            <p>Price: 30 lv/kg</p>
                            <p>
                                <a href="/details/product/productId">
                                    <button type="button" className="btn btn-secondary">More info</button>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* else */}

                {/* <div className="guest-home">
                    <h1>Welcome to Healthy world!</h1>
                    <h2>The biggest online bee products marketplace</h2>
                    <img src="../../images/sunflowers.jpg" className="rounded" alt="Sunflowers" />
                </div> */}

                {/* if */}
            </Fragment>
        );
    }
}

export default Home;