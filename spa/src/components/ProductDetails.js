import React from 'react';

class ProductDetails extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div className="row bg-light">
                <div className="col-md-8">
                    <h1>Пчелен мед</h1>
                    <img className="img-thumbnail" src="../images/991-ratio-med.jpg" alt="Пчелен мед" />
                </div>
                <div className="col-md-12 text-center">
                    <h3>Описание:</h3>
                    <p>Продавам биологично чист пчелен мед. Година на производство - юни, 2021г. </p>
                    <p>Цена: 10лв./кг </p>
                    <p>Продавач: petko@abv.bg</p>
                    <br />

                    {/* if this.currentMovie.amITheCreator         */}
                    <p>
                        <a className="btn btn-dark" href="/product/edit">Edit</a>
                        <a className="btn btn-danger" href="/product/delete">Delete</a>
                    </p>
                </div>
            </div>
        );
    }
}

export default ProductDetails;