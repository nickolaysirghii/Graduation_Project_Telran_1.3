import React from 'react';
import "./everyProduct.css";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { adToCart  } from '../../../../reduxStore/Slices/fetchProductsAll';


const EveryProduct = ({elem , amount}) => {
    const { price,title,discont_price,image , id } = elem;
    const earned = discont_price ? discont_price - price : 0;
    const percent = discont_price ? earned / (price / 100) : 0;
    const dispatcher = useDispatch();

    const animationStyle = {
      visibility: amount ? "visible" : "hidden",
      position: "absolute",
      top: "-230px",
      right: "-800px",
      ZIndex: "2"
    }
    

    const AD_TO_CART = ()=>{
      dispatcher(adToCart(elem.id))
    };
    const shortedTitle = `${elem.title.slice(0,25)}...`;

    

    return (
        <div className='every'>
             <Link to={`/products/${id}`}>
                  <div
                   className='imageProduct' 
                  style={{backgroundImage:`url(http://localhost:3333/${image})`}} />
              </Link>
            <p className='priceProduct2'>{discont_price ? discont_price : price}<span>$</span></p>
            { 
               discont_price &&
                            <p className='oldPrice2'>
                            {discont_price ? price : discont_price}<span>$</span></p>
            }
            { 
               discont_price &&
                            <p className='percentOfDiscount'>
                            {`${(percent).toFixed(2)}`}<span>%</span></p>
            }
            <p className='productTitle'>{title.length > 25 ? shortedTitle : title}</p>
            <button className={amount ? "showNewButton" : 'NewButton' }
                    onClick={AD_TO_CART} >

                     {
                       amount ? "Added to cart" : "Add to cart"
                     }
              
                <div className={amount ? "productsExist" : "productsDontExist"}>
                   {
                     amount
                   }
                </div>
              
              </button>
              <div className='waitAnimation' style={animationStyle}></div>
        </div>
      )
}

export default EveryProduct