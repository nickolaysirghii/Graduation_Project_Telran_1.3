import React from 'react';
import "./cart.css";
import CartProduct from './CartProduct/CartProduct';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useSelector , useDispatch } from "react-redux";
import { purchase , returnBack } from '../../../reduxStore/Slices/fetchProductsAll';
import axios from 'axios';

const Cart = () => {

  const dispatcher = useDispatch();
  const { productsAll , cartData , sendStatus  } = useSelector((state)=>state.allProducts);
  let TotalMoney = 0;

  const sendOdrer = (e)=>{
    e.preventDefault();
    dispatcher(purchase());
      axios.post('http://localhost:3333/order/send', {
      purchaseData: cartData,
      phone: e.target.phone1.value
    });
    e.target.reset();
  }
 
if(sendStatus){setTimeout(() => {dispatcher(returnBack())}, 3000);};
    
return (
    <div className='cart'>
        <h2 className='cartTitle'>Shopping cart</h2>
        <p className='backToStore'>Back to the store</p>
        <Link to="/"><FontAwesomeIcon className='letAngle' icon={faAngleRight} /></Link>
  <div className='cartContainer'>
         {
            productsAll.map((elem,idx)=>{
              let checkAmount = 0;
              cartData.forEach((check)=>{
                if(elem.id === check.id){
                  checkAmount = check.amount
                }
              });

              if(checkAmount !== 0){
                TotalMoney = TotalMoney + ((elem.discont_price ? elem.discont_price : elem.price)*checkAmount)
                return <CartProduct key={idx}  amount={checkAmount} element = {elem}/>
              }else 
              return null
              })
          }
  </div>
        <form onSubmit={sendOdrer} className='orderDetails'>
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
        <Link to="/" className='ungleCover'></Link>
    </div>
  )
}

export default Cart