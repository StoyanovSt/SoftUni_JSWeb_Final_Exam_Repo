
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './components/Home.js';
import Register from './components/Register.js';
import Login from './components/Login.js';
import ProductDetails from './components/ProductDetails.js';
import EditProduct from './components/EditProduct.js';
import CreateProduct from './components/CreateProduct.js';

function App() {
  return (
    <div>
      <Header />
      <CreateProduct />
      <Footer />
    </div>
  );
}

export default App;
