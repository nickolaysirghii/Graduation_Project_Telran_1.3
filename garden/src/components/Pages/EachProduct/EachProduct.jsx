import React,{ useEffect } from 'react';
import "./eachprod.css";
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

 const adFunction = () =>{dispatcher(changeAnimation(true))
  setTimeout(() => {dispatcher(adToCart(id))},400);};

  const { mob } = useSelector((state)=>state.allProducts);

  return (
    <div className={`${mob}eachProdContainer`}>
    <h2 className={`${mob}EachProdTitle`}>{title}</h2>
    <div className={`${mob}eachBelow`}>
          <div className={`${mob}EachElemImagef`} style={{backgroundImage:`url(http://localhost:3333/${image})`}}></div>
          <div className={`${mob}EachElemInfoff`}>
            <div className={`${mob}EachPriceInff`}>
              <p className={`${mob}discontEachPr`}>{discont_price ? discont_price : price}<span>$</span></p>
              <p className={`${mob}priceEachPr`}>{discont_price ? `${price}$`: ""}</p>
              <p className={`${mob}PercentEachPr`}>{ discont_price  ? `-${-percent.toFixed(2)}` : ""}</p>
            </div>
            <button onClick={adFunction} id={image} className={`${mob}TocartButton`}>to cart
            <div className={amount !== 0 ? `${mob}five` : "six"}>{amount}</div>
            </button>
            <div className={`${mob}everyDescriptionf`}>
              <p className={`${mob}EvDescriptTitle`}>Descripton</p>
              <p className={`${mob}AllDescriptionf`}>{description}</p>
            </div>
          </div>
    </div>
    </div>
  )
}

export default EachProduct