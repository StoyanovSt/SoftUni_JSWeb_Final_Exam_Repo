import React from 'react';

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
                            <img src="../../images/991-ratio-med.jpg" className="rounded-circle" alt="Пчелен мед" />
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
                <div className="row bg-light">
                    <div className="col-md-12">
                        <div className="guest">
                            <h1 className="text-center">Healthy world</h1>
                            <h2 className="text-center">Welcome to our online bee products marketplace</h2>
                            <h5>In order to see the offerts you must first create an account!</h5>
                            <div>
                                <img src="../../images/csm_Sunflower_Koppert_Biological_Systems_1e52b3de18.jpg"
                                    className="center rounded" alt="Sunflowers" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* if */}
            </div>

        );
    }
}

export default Home;