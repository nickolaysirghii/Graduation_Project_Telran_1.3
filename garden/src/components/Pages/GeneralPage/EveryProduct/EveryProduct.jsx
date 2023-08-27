import React from 'react';
import "./everyProduct.css";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { adToCart } from '../../../../reduxStore/Slices/fetchProductsAll';


const EveryProduct = ({elem , idx}) => {
    const { price,title,discont_price,image,amount } = elem;
    const dispatcher = useDispatch();

    const short = "Hallo short"
    const AD_TO_CART = ()=>{dispatcher(adToCart(idx))};

  return (
        <div className='every'>
             <Link to="/eachProduct">
                  <div /*onClick={detailed}*/
                   className='imageProduct' 
                   style={{backgroundImage:`url(http://localhost:3333/${image})`}} />
              </Link>
            <p className='priceProduct2'>{price}<span>$</span></p>
            { 
               discont_price &&
                            <p className='oldPrice2'>
                            {discont_price}<span>$</span></p>
            }
            { 
               discont_price &&
                            <p className='percentOfDiscount'>
                            {`-${(price/discont_price).toFixed(2)}`}<span>%</span></p>
            }
            <p className='productTitle'>{title.length > 25 ? short : title}</p>
            <button className={amount ? "showNewButton" : 'NewButton' }
                    onClick={AD_TO_CART}>

                     {
                       amount ? "Added to cart" : "Add to cart"
                     }
              
                <div className={amount ? "productsExist" : "productsDontExist"}>
                   {
                     amount
                   }
                </div>
              
              </button>
        </div>
      )
}

export default EveryProduct