
import './App.css';
import Header from './components/1Header/Header';
import Footer from './components/Z_Footer/Footer';
import { pagesData } from "./routes";
import { Route, Routes } from 'react-router-dom';
import { useSelector , useDispatch } from 'react-redux';
import {getClass , changeAnimation , changePosition} from './reduxStore/Slices/animation';


function App() {
  const dispatcher = useDispatch();
  const { apear } = useSelector((state)=>state.animation);

  if(apear){
    setTimeout(() => {
      dispatcher(changeAnimation())
      }, 1000);
  }
    const getEvent = (e)=>{
    const position = {
      x:e.clientX,
      y:e.clientY
      
    }
      dispatcher(changeAnimation())
      dispatcher(changePosition(position))
      dispatcher(getClass(e.target.className))
    
    }
  return (
    <div className="App" onClick={getEvent} >
      <div className='container' >
            <div className='wraper'>
              <Header className='headerFixed'/>
           </div>
                <Routes>
                  {
                    pagesData.map((elem,idx)=>{
                     return <Route key={idx} path={elem.path} Component={elem.element} />
                    })
                  }
               </Routes>
           <Footer />
      </div>
      <div className='coverBorder'></div>
      <div className='coverTwo'></div>
    </div>
  );
}

export default App;
