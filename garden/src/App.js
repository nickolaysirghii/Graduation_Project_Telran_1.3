
import './App.css';
import Header from './components/1Header/Header';
import Footer from './components/Z_Footer/Footer';
import { pagesData } from "./routes";
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <div className='container'>
           <Header />
                <Routes>
                  {
                    pagesData.map((elem,idx)=>{
                     return <Route key={idx} path={elem.path} Component={elem.element} />
                    })
                  }
               </Routes>
           <Footer />
      </div>
    </div>
  );
}

export default App;
