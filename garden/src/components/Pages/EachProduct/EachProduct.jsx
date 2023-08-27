import React from 'react';
import "./eachProduct.css";
import {  useSelector , useDispatch } from "react-redux"
import { adToCart } from "../../../reduxStore/Slices/fetchProductsAll"


const EachProduct = () => {
  const dispatcher = useDispatch();
  const product = useSelector((state)=>state.allProducts.eachProduct)
  const {price,discont_price,image,title,amount,description,id} = product;
      const earned = discont_price ? discont_price - price : 0;
      const percent = discont_price ? earned / (price / 100) : 0;
  
 const adFunction = () =>{dispatcher(adToCart(id - 1))}
 return (
    <div className='eachProduct'>
        <div className='eachPrTitle'>{title}</div>
        <div className='productPicture' style={{backgroundImage: `url(http://localhost:3333${image})`}}></div>
        <h2 className='priceProduct'>{discont_price ? discont_price : price}
               <span className='dolars'>$</span>
        </h2>
        <p className='lastPrice'>{discont_price ? `${price}$`: ""}</p>
        <p className='percentDiscount'>{ discont_price  ? `-${-percent.toFixed(2)}` : ""}
              <span className='percent'>{discont_price ? "%" : ""}</span>
        </p>
        <button className='toCart' onClick={adFunction}>To Cart
        <div className={amount ? "five" : "six"}>{amount}</div>
        </button>
        <div className='description'>
            <p className='sedDescrip'>Description</p>
            <p className='descriptionText'>{description}</p>
        </div>
    </div>
  )
}

export default EachProduct