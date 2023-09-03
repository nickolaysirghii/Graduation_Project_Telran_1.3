import React,{ useEffect } from 'react';
import "./eachProduct.css";
import {  useSelector , useDispatch } from "react-redux";
import { adToCart } from "../../../reduxStore/Slices/fetchProductsAll";
import { fetchProudct } from "../../../reduxStore/Slices/fetchEachProduct"
import { useParams } from 'react-router-dom';
import { changeAnimation } from "../../../reduxStore/Slices/animation"

const EachProduct = () => {

  const product = useSelector((state)=>state.eachProduct.product);
  const { cartData }= useSelector((state)=>state.allProducts);
  const {price,discont_price,image,title,description,id} = product;
  const dispatcher = useDispatch();
  const params = useParams();
  useEffect(()=>{dispatcher(fetchProudct(params.prod))},[]);

  let amount = 0;
  cartData.forEach((elem)=>{
    if(elem.id === id){
     amount = elem.amount
    }
  });

  const earned = discont_price ? discont_price - price : 0;
  const percent = discont_price ? earned / (price / 100) : 0;

 const adFunction = () =>{dispatcher(changeAnimation())
  setTimeout(() => {dispatcher(adToCart(id))},400);};
  
 return (
    <div className='eachProduct'>
        <div className='eachPrTitle'>{title}</div>
        <div className='productPicture' style={{
          backgroundImage: `url(http://localhost:3333${image})`}}></div>
        <h2 className='priceProduct'>{discont_price ? discont_price : price}
               <span className='dolars'>$</span>
        </h2>
        <p className='lastPrice'>{discont_price ? `${price}$`: ""}</p>
        <p className='percentDiscount'>{ discont_price  ? `-${-percent.toFixed(2)}` : ""}
              <span className='percent'>{discont_price ? "%" : ""}</span>
        </p>
        <button id={image} className='toCart' onClick={adFunction}>To Cart
        <div className={amount !== 0 ? "five" : "six"}>{amount}</div>
        </button>
        <div className='description'>
            <p className='sedDescrip'>Description</p>
            <p className='descriptionText'>{description}</p>
        </div>
    </div>
  )
}

export default EachProduct