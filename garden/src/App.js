
import './App.css';
import Header from './components/1Header/Header';
import AllProducts from './components/Pages/AllProducts/Allproducts1';
import Footer from './components/Z_Footer/Footer';
import AllSales from './components/Pages/AllSales/AllSales1';
import Categories from './components/Pages/Categories/Categories';
import CategoryProducts from './components/Pages/CategoryProducts/CategoryProducts';
import Cart from "./components/Pages/Cart/Cart"

function App() {
  return (
    <div className="App">
        <Header />
          <Categories />
          <CategoryProducts />
          <Cart />
        <Footer />
    </div>
  );
}

export default App;
