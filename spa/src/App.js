
import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom';

import Home from './components/Home/Home.js';
import Register from './components/Register/Register.js';
import Login from './components/Login/Login.js';
import ProductDetails from './components/ProductDetails/ProductDetails.js';
import EditProduct from './components/EditProduct/EditProduct.js';
import CreateProduct from './components/CreateProduct/CreateProduct.js';
import Contacts from './components/Contacts/Contacts.js';
import PageNotFound from './components/PageNotFound/PageNotFound.js';
import UserProfile from './components/UserProfile/UserProfile.js';
import DeleteProduct from './components/DeleteProduct/DeleteProduct.js';

function App() {
    function logoutUser() {
        localStorage.removeItem('user');
        return <Redirect to="/api/" />;
    };

    return (
        < div className="site-wrapper" >
            <Switch>
                <Route path="/" exact render={() => <Redirect to="/api/" />} />
                <Route path="/api/" exact component={Home} />
                <Route path="/api/register" exact render={() => (localStorage.getItem('user') ? true : false) ? <Redirect to="/api/" /> : <Register />} />
                <Route path="/api/login" exact render={() => (localStorage.getItem('user') ? true : false) ? <Redirect to="/api/" /> : <Login />} />
                <Route path="/api/logout" exact render={logoutUser} />
                <Route path="/api/product/create" exact render={() => (localStorage.getItem('user') ? true : false) ? <CreateProduct /> : <Redirect to="/api/login" />} />
                <Route path="/api/product/:productId/details" exact component={ProductDetails} />
                <Route path="/api/product/:productId/delete" exact component={DeleteProduct} />
                <Route path="/api/product/:productId/edit" exact component={EditProduct} />
                <Route path="/api/user/profile" exact render={() => (localStorage.getItem('user') ? true : false) ? <UserProfile /> : <Redirect to="/api/login" />} />
                <Route path="/api/contacts" exact component={Contacts} />
                <Route component={PageNotFound} />
            </Switch>
        </div >
    );
}

export default App;
