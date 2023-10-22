
import './App.css';
import Header from './components/1Header/Header';
import Footer from './components/Z_Footer/Footer';
import { pagesData } from "./routes";
import { Route, Routes } from 'react-router-dom';
import { useSelector , useDispatch } from 'react-redux';
import { changeAnimation , changePosition} from './reduxStore/Slices/animation';

function App() {

  const dispatcher = useDispatch();
  const { apear } = useSelector((state)=>state.animation);
  const { sendStatus  } = useSelector((state)=>state.allProducts);

  if(apear){setTimeout(() => {dispatcher(changeAnimation(false))}, 1000);}
  
    const getEvent = (e)=>{
     const position = {
           top: e.screenY -200 ,
           get_class: e.target.className,
           image: e.target.id,
           left: e.target.offsetParent.offsetLeft       
                  };
      dispatcher(changePosition(position))
    };
    
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
