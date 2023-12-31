import React , { useEffect , useState } from 'react';
import "./header2.css";
import bag from "../../svg/bag.svg";
import { Link } from 'react-router-dom';
import { useDispatch , useSelector } from "react-redux";
import { fetchProducts } from '../../reduxStore/Slices/fetchProductsAll';
import { fetchCategoryes } from '../../reduxStore/Slices/fetchCategries';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import HeaderBar from './HeaderBar';



const Header = () => {
const dispatcher = useDispatch();
const {cartAmount , circleAmount , mob} = useSelector((state)=>state.allProducts);
const { sendStatus  } = useSelector((state)=>state.allProducts);
const {top, left, productImage , targetClasses , apear } = useSelector((state)=>state.animation);
useEffect(()=>{dispatcher(fetchProducts());dispatcher(fetchCategoryes());},[]);

//==================================================================

  const [BarrClass , setBarrClass] = useState('HidenHeaderBarContainer')
  const barFunction = ()=>{
      if(BarrClass === 'HidenHeaderBarContainer' ){
        setBarrClass('ShowHeaderBarContainer')
      }else{
        setBarrClass('HidenHeaderBarContainer')  
      }
  }
  const closeBarr = ()=>{
    setBarrClass('HidenHeaderBarContainer')
  }
    return (
      <div className={`${mob}HeaderContainer`}>
          <div onClick={closeBarr}  className={BarrClass}><HeaderBar /></div>
          <FontAwesomeIcon className={`${mob}Bar`} icon={faBars}/>
          <div onClick={barFunction} className={`${mob}classCover`}></div>
           <Link to="/" className={`${mob}HeaderLogo`}></Link>
          <Link to="/categories" className={`${mob}HeaderCatalog`}>Catalog</Link>
          <div className={`${mob}Ankers`}>
             <Link to="/">Main Page</Link>
             <Link to="/products/all">All products</Link>
             <Link to="/sales/all">All sales</Link>
          </div>
          <Link to="/cart"><img src={bag} alt='bag' className={`${mob}Bag`}/></Link>
          <div className={cartAmount > 0 ? `${mob}cartAmount` : 'cartHidden'}>{cartAmount}</div>
                  {
                   apear && <div className={`${mob}swallow`}><div>{cartAmount}</div></div>
                  }
                  {
                ( targetClasses === `${mob}NewButton` ||
                  targetClasses === `${mob}toCart`    ||
                  targetClasses === `${mob}AddButton` ||
                  targetClasses === `${mob}TocartButton` ||
                  targetClasses ===  `${mob}showNewButton` ) && apear && 
                  <div style={{top: mob === "" ? "10vh" : "40vh" ,
                               left: mob === "" ? "10vw" : "20vw" ,
                               width:mob === "" ? "50vw" : "50vw",
                               height:mob === "" ? "50vw" : "50vw",
                               backgroundImage: `url(http://localhost:3333${productImage})`,
                               backgroundSize: "contain",                              backgroundRepeat: "no-repeat"}}
                      className='animationElem'></div>
            }
            {
                sendStatus && <div className= {`${mob}fallingCircleContainer`}>
                           <div className= {`${mob}fallingCircle`}>{circleAmount}</div>
                      </div>
           }
           {
            sendStatus && <div className={`${mob}theBee`}>
             <div className='bzzCover'></div>
             <div className='The_bee'>
            <div className='DownPart'></div>
            <div className='head'></div>
            <div className='backHead'></div>
            <div className='beeBack'></div>
            <div className='leftWing'></div>
            <div className='rihtWing'></div>
         </div>
           </div>
         }
      </div>
    )

// const dispatcher = useDispatch();
// const {cartAmount , circleAmount} = useSelector((state)=>state.allProducts);
// const { sendStatus  } = useSelector((state)=>state.allProducts);
// const {top, left, productImage , targetClasses , apear } = useSelector((state)=>state.animation);
// useEffect(()=>{dispatcher(fetchProducts());dispatcher(fetchCategoryes());},[]);

// return (
//     <div className='headerContainer'>
//         <header className='header'>
//               
//               
//              
//               
//               
             
//                   
                
//             

//         </header>
//         
//         
//         </div>
//   )
}

export default Header
