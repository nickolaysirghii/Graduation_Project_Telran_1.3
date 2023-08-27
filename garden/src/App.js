
import './App.css';
import Header from './components/1Header/Header';
import Footer from './components/Z_Footer/Footer';
import GeneralPage from './components/Pages/GeneralPage/GeneralPage';
import Cart from './components/Pages/Cart/Cart';

function App() {
  return (
    <div className="App">
        <Header />
          <Cart />
          <GeneralPage />
        <Footer />
    </div>
  );
}

export default App;
