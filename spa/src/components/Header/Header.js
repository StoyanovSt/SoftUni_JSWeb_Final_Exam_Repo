import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <nav className="navbar navbar-expand-lg">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <button type="button" className="btn btn-light">Home                            
                            <Link to="/api"></Link>
                        </button>
                    </li>
                    {/* <li className="nav-item">
                        <button type="button" className="btn btn-light">Create product
                            <Link to="/api/product/create"></Link>
                        </button>
                    </li> */}
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <button type="button" className="btn btn-light">Register
                            <Link to="/api/register"></Link>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button type="button" className="btn btn-light">Login
                            <Link to="/api/login"></Link>
                        </button>
                    </li>
                    
                    {/* <li className="nav-item">
                        <button type="button" className="btn btn-light">My profile
                            <Link to="/api/user/profile"></Link>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button type="button" className="btn btn-light">Logout
                            <Link to="/api/logout"></Link>
                        </button>
                    </li> */}                    

                </ul>
            </nav>
        );
    }
}

export default Header;