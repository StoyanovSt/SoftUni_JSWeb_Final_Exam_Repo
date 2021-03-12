import React from 'react';

class PageNotFound extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div>
                <span className="col-md-12">
                    <img src="../../images/page-not-found.jpg" className="rounded-circle" alt="Page not found!" />
                </span>
                <span className="page-not-found">
                    Page not found!
                </span>
            </div>
        );
    }
}

export default PageNotFound;