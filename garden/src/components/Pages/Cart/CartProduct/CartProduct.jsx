import React from 'react';
import "./cartProduct.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch , useSelector } from "react-redux";
import { deleteFromCart,increaseAmount,decreaseAmount } from '../../../../reduxStore/Slices/fetchProductsAll';
import { cartAnimation } from '../../../../reduxStore/Slices/animation';

const CartProduct = ({element , amount }) => {
 const { discont_price,price} = element;
 const { cartDependAnimation , cartId , cartDirection } = useSelector((state)=>state.animation)
 const dispatcher = useDispatch();
const deleteProduct = () =>{dispatcher(deleteFromCart(element.id ))}
const increaseProduct = () =>{dispatcher(increaseAmount(element.id))
  dispatcher(cartAnimation({
    state: 1,
    id: element.id,
    direction: "up"
  }))
}
const decreaseProduct = () =>{dispatcher(decreaseAmount(element.id))
  dispatcher(cartAnimation({
    state: 1,
    id: element.id,
    direction: "down"
  }))
}


if(cartDependAnimation === 1){
  const cartData = {
    state: 0,
    id: element.id,
    direction: "up"
  }
  setTimeout(() => {
    dispatcher(cartAnimation(cartData))
  }, 250);
}
 
  return (
    <div className='cartProduct'>
        <div className='cartImageProduct'style={{backgroundImage:`url(http://localhost:3333/${element.image})`}}></div>
        <div className='desProCart'>{element.title}</div>
        <div className='amount'>
            <p className='decrees' onClick={decreaseProduct}>-</p>
            <p className='amountNumber'>{amount}</p>
            <p className='increase' onClick={increaseProduct}>+</p>
        </div>
        <p className='cartProdPrice'>{discont_price ? (discont_price*amount).toFixed(2) : (price*amount).toFixed(2)}
        <span className='dollar33'>$</span>
        </p>
        {
         discont_price && <p className='oldPriceCart'>{`${(price*amount).toFixed(2)}$`}</p>
        }
        
        <FontAwesomeIcon className='deleteProdCart' icon={faXmark}  />
        {
        ( cartDependAnimation === 1 && 
          cartId === element.id)
         && <div className= {cartDirection === "up" ? "animationCartIncrease" : "animationCartDecreese" }>{amount}</div>  
        }
        <div className='coverCross' onClick={deleteProduct}></div>
    </div>
  )
}

export default CartProduct