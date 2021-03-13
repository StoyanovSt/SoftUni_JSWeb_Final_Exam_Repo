import React from 'react';
import './Home.css';

class Home extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div className="home-view">
                {/* if loggedIn */}
                {/* <div className="all-offers">
                    <div className="row bg-light">
                        <div className="col-md-4">
                            <img src="../../images/honey-jar.jpg" className="rounded-circle" alt="Пчелен мед" />
                            <div>Пчелен мед</div>
                            <div>Цена: 10лв.</div>

                            <a href="/details">
                                <button type="button" className="btn btn-light">Повече информация за
                                    продукта
                                </button>
                            </a>
                        </div>
                        <div className="col-md-4">
                            <img src="../../images/propolis.jpg" className="rounded-circle" alt="Прополис" />
                            <div>Прополис</div>
                            <div>Цена: 30лв.</div>

                            <a href="/details">
                                <button type="button" className="btn btn-light">Повече информация за
                                    продукта
                                </button>
                            </a>
                        </div>
                    </div>
                </div> */}
                {/* else */}

                <div className="guest-home">
                    <h1>Welcome to Healthy world!</h1>
                    <h2>The biggest online bee products marketplace</h2>
                    <img src="../../images/sunflowers.jpg" className="rounded" alt="Sunflowers" />                    
                </div>

                {/* if */}
            </div>

        );
    }
}

export default Home;