import React from 'react';
import "./everyGenElem.css";
import { Link } from 'react-router-dom';
import { useDispatch , useSelector} from 'react-redux';
import { adToCart  } from '../../../../reduxStore/Slices/fetchProductsAll';
import { changeAnimation } from '../../../../reduxStore/Slices/animation';

const EveryProduct = ({elem , amount}) => {

    const { price,title,discont_price,image , id } = elem;
    const earned = discont_price ? discont_price - price : 0;
    const percent = discont_price ? earned / (price / 100) : 0;
    const dispatcher = useDispatch();
    
const AD_TO_CART = ()=>{
      dispatcher(changeAnimation(true))
      setTimeout(() => {
        dispatcher(adToCart(elem.id))
      }, 400);
      
    };
const shortedTitle = `${elem.title.slice(0,25)}...`;

const { mob } = useSelector((state)=>state.allProducts);
return (
  <div className={`${mob}EveryGenContainer`}>
    <Link to={`/products/${id}`}>
  <div className={`${mob}EveryGenImage`} style={{backgroundImage:`url(http://localhost:3333/${image})`}}></div>
    </Link>
  <div className={`${mob}generalPriceInfo`}>
   <p className={`${mob}GeneralDiscont`}>{discont_price ? discont_price : price}<span>$</span></p>
   { 
                discont_price &&
                             <p className={`${mob}GeneralPrice`}>
                             {discont_price ? price : discont_price}<span>$</span></p>
             }
             { 
                discont_price &&
                             <p className={`${mob}GeneralPercent`}>
                             {`${(percent).toFixed(2)}`}<span>%</span></p>
             }
  </div>
  <p className={`${mob}ElementGenTitle`}>{shortedTitle}</p>
  <button className={amount ? `${mob}showNewButton` : `${mob}AddButton` }
                     id={image}
                     onClick={AD_TO_CART} >

{
                        amount ? "Added to cart" : "Add to cart"
                      }
              
                 <div className={amount ?`${mob}productsExist` : "productsDontExist"}>
                    {
                      amount
                    }
                 </div>
                      
                     </button>
  </div>
  
)
}

export default EveryProduct