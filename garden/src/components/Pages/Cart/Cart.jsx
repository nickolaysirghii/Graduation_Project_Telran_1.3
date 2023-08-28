import React from 'react';
import "./cart.css";
import { Link } from 'react-router-dom';
import CartProduct from './CartProduct/CartProduct';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from "react-redux";




const Cart = () => {
  const { productsAll } = useSelector((state)=>state.allProducts);
  const checkCart = useSelector((state)=>state.allProducts.cartData);
  const sendStatus = false;
  let TotalMoney = 0;
return (
    <div className='cart'>
        <h2 className='cartTitle'>Shopping cart</h2>
        <p className='backToStore'>Back to the store</p>
        <Link to="/"><FontAwesomeIcon className='letAngle' icon={faAngleRight} /></Link>
        <div className='cartContainer'>
         {
            productsAll.map((elem,idx)=>{
              let checkAmount = 0;
              checkCart.forEach((check)=>{
                if(elem.id === check.id){
                  checkAmount = check.amount
                }
              })
              if(checkAmount !== 0){
                TotalMoney = TotalMoney + ((elem.discont_price ? elem.discont_price : elem.price)*checkAmount)
                return <CartProduct key={idx}  amount={checkAmount} element = {elem}/>
              }else 
              return null
              })
          }
        </div>
        <form /*onSubmit={PostPurchase}*/ className='orderDetails'>
                <p className='orerFormTitle'>Order details</p>
                <div className='total'>
                    <p className='total2'>Total</p>
                    <p className='totalPriceNumber'>{TotalMoney.toFixed(2)}
                       <span className='dolar22'>$</span>
                   </p>
                </div>
               <input placeholder='Phone number'type='text' name='phone1' />
               <button >{sendStatus ? "Thank You" : "Order"}</button>
        </form>
    </div>
  )
}

export default Cart