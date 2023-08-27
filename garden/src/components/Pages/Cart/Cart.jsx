import React from 'react';
import "./cart.css";
import { Link } from 'react-router-dom';
import CartProduct from './CartProduct/CartProduct';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from "react-redux";




const Cart = () => {
  const {cartTotal , productsAll} = useSelector((state)=>state.allProducts);
 const sendStatus = false;
return (
    <div className='cart'>
        <h2 className='cartTitle'>Shopping cart</h2>
        <p className='backToStore'>Back to the store</p>
        <Link to="/"><FontAwesomeIcon className='letAngle' icon={faAngleRight} /></Link>
        <div className='cartContainer'>
         {
            productsAll.map((elem,idx)=>{
              if(elem.amount){
                return <CartProduct key={idx} element = {elem}/>
              }else 
              return null
              })
          }
        </div>
        <form /*onSubmit={PostPurchase}*/ className='orderDetails'>
                <p className='orerFormTitle'>Order details</p>
                <div className='total'>
                    <p className='total2'>Total</p>
                    <p className='totalPriceNumber'>{cartTotal.toFixed(2)}
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