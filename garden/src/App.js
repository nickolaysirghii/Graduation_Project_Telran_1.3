
import './App.css';
import Header from './components/1Header/Header';
import Footer from './components/Z_Footer/Footer';
import { pagesData } from "./routes";
import { Route, Routes } from 'react-router-dom';
import { useSelector , useDispatch } from 'react-redux';
import {takeImage , getClass , changeAnimation , changePosition} from './reduxStore/Slices/animation';


function App() {
  const dispatcher = useDispatch();
  const { apear } = useSelector((state)=>state.animation);

  if(apear){
    setTimeout(() => {
      dispatcher(changeAnimation())
      }, 500);
  }
  
    const getEvent = (e)=>{
    const positionleft = e.target.offsetParent.offsetLeft;
    const topElement = e.nativeEvent.layerY;
    const topScreen = e.screenY;
    const positionTop = topScreen - topElement - 310;
    const position = {
      x:e.clientX,
      y:e.clientY,
      top: positionTop,
      left:positionleft
      
    }
      dispatcher(changeAnimation())
      dispatcher(changePosition(position))
      dispatcher(getClass(e.target.className))
      dispatcher(takeImage(e.target.id))
    
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
    </div>
  );
}

export default App;
