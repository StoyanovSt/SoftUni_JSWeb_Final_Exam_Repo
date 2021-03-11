
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './components/Home.js';
import Register from './components/Register.js';
import Login from './components/Login.js';
import ProductDetails from './components/ProductDetails.js';

function App() {
  return (
    <div>
      <Header />
      <ProductDetails />
      <Footer />
    </div>
  );
}

export default App;
