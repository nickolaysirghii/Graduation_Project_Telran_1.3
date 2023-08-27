
import './App.css';
import Header from './components/1Header/Header';
import Footer from './components/Z_Footer/Footer';
import GeneralPage from './components/Pages/GeneralPage/GeneralPage';
import EachProduct from './components/Pages/EachProduct/EachProduct';

function App() {
  return (
    <div className="App">
        <Header />
          <EachProduct />
          <GeneralPage />
        <Footer />
    </div>
  );
}

export default App;
