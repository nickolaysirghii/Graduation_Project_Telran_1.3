import React from 'react';
import "./cart.css";
import { Link } from 'react-router-dom';
import CartProduct from './CartProduct/CartProduct';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { useSelector , useDispatch } from "react-redux";




const Cart = () => {
  const dispatcher = useDispatch();
  const data = useSelector((state)=>state.allProducts.productsAll);
 const car = 444;
 const sendStatus = false;

return (
    <div className='cart'>
        <h2 className='cartTitle'>Shopping cart</h2>
        <p className='backToStore'>Back to the store</p>
        <Link to="/"><FontAwesomeIcon className='letAngle' icon={faAngleRight} /></Link>
        <div className='cartContainer'>
         {
            data.map((elem,idx)=>{
              if(elem.amount){
                return <CartProduct key={idx} element = {elem} idx={idx}/>
              }else 
              return null
  
              
            })
          }
        
  
        </div>
        <form /*onSubmit={PostPurchase}*/ className='orderDetails'>
         <p className='orerFormTitle'>Order details</p>
         <div className='total'>
           <p className='total2'>Total</p>
           <p className='totalPriceNumber'>{car.toFixed(2)}
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