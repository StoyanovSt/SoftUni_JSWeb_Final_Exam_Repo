
import './App.css';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Home from './components/Home/Home.js';
import Register from './components/Register/Register.js';
import Login from './components/Login/Login.js';
import ProductDetails from './components/ProductDetails/ProductDetails.js';
import EditProduct from './components/EditProduct/EditProduct.js';
import CreateProduct from './components/CreateProduct/CreateProduct.js';
import Contacts from './components/Contacts/Contacts.js';
import PageNotFound from './components/PageNotFound/PageNotFound.js';
import UserProfile from './components/UserProfile/UserProfile.js';
import Notification from './components/Notification/Notification.js';

function App() {
  return (
    <div className="site-wrapper">
      <Header />
      <Register />
      <Footer />      
    </div>
  );
}

export default App;
