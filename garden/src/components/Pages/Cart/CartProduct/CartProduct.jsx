import React from 'react';
import "./eachCardPro.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch , useSelector } from "react-redux";
import { deleteFromCart,increaseAmount,decreaseAmount } from '../../../../reduxStore/Slices/fetchProductsAll';
import { cartAnimation } from '../../../../reduxStore/Slices/animation';
import { Link } from 'react-router-dom';

const CartProduct = ({element , amount }) => {

  const {mob} = useSelector((state)=>state.allProducts);
 const { discont_price,price} = element;
 const { cartDependAnimation , cartId , cartDirection } = useSelector((state)=>state.animation)
 const dispatcher = useDispatch();

 const deleteProduct = () =>{dispatcher(deleteFromCart(element.id ))};

 const increaseProduct = () =>{dispatcher(increaseAmount(element.id));
                               dispatcher(cartAnimation({state: 1,
                                                         id: element.id,
                                                         direction: "up"}));};
const decreaseProduct = () =>{
  if(amount > 1){
  dispatcher(decreaseAmount(element.id))
  dispatcher(cartAnimation({state: 1,
                            id: element.id,
                            direction: "down"}));};
  }

if(cartDependAnimation === 1){
  const cartData = {
    state: 0,
    id: element.id,
    direction: "up"
  };

  setTimeout(() => {dispatcher(cartAnimation(cartData))}, 250);};

  return (
    <div className={`${mob}EachProductCart`}>
      <Link to={`/products/${element.id}`} className={`${mob}cartProdImagh`} style={{backgroundImage:`url(http://localhost:3333/${element.image})`}}></Link>
      <div className={`${mob}cartProdImfog`}>
        <div className={`${mob}DeleteWrapper`}>
           <p className={`${mob}cartProdTitler`}>{element.title}</p>
           <div onClick={deleteProduct} className={`${mob}DeleteProduct`}></div>
        </div>
        <div className={`${mob}PriceWrapper`}>
           <p className={`${mob}PriceProductCart`}>{discont_price ? (discont_price*amount).toFixed(2) : (price*amount).toFixed(2)}<span>$</span></p>
           <p className={`${mob}priceDiscont`}>{`${(price*amount).toFixed(2)}`}<span>$</span></p>
        </div>
        <div className={`${mob}IncreaseAmount`}>
          <p onClick={decreaseProduct} className={`${mob}minus`}>-</p><p className={`${mob}priceState`}>{amount}</p><div onClick={increaseProduct}>+</div> 
          
        </div>
        {
         ( cartDependAnimation === 1 && 
           cartId === element.id)
          && <div className= {cartDirection === "up" ? `${mob}animationCartIncrease` : `${mob}animationCartDecreese`}>{amount}</div>  
         }
        
      </div>
    </div>
  )
}

export default CartProduct