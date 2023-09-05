import React from 'react';
import "./cart.css";
import CartProduct from './CartProduct/CartProduct';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useSelector , useDispatch } from "react-redux";
import { purchase , returnBack , clearCircleAmount } from '../../../reduxStore/Slices/fetchProductsAll';
import { changeDidnt } from '../../../reduxStore/Slices/animation';
import axios from 'axios';

const Cart = () => {

  const dispatcher = useDispatch();
  const { productsAll , cartData , sendStatus  } = useSelector((state)=>state.allProducts);
  const { didntIntrouce } = useSelector((state)=>state.animation);
  let TotalMoney = 0;
  const sendOdrer = (e)=>{
    e.preventDefault();
    if(e.target.phone1.value !== ""){
    setTimeout(() => {dispatcher(clearCircleAmount())}, 10000);
    dispatcher(purchase(true));
      axios.post('http://localhost:3333/order/send', {
      purchaseData: cartData,
      phone: e.target.phone1.value
    });
    e.target.reset();
  }else{
    dispatcher(changeDidnt(true))
  }
  }
 
if(sendStatus){setTimeout(() => {dispatcher(returnBack(false));}, 10000);};
if(didntIntrouce){ setTimeout(() => {dispatcher(changeDidnt(false))},3000);}
    
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
               <button >
                  <p>{sendStatus ? "Thank You " : "Order"}</p>
                  {
                   sendStatus && <p className='The_Bee_message'>Wait for the bee, she is already flying to you !!! BZZZZ_zzzzZZZ!!!</p>
                  }
                  {
                   didntIntrouce && <div className='NoData'>
                      You forgot to enter your phone number !
                    </div>
                  }
               </button>
        </form>
        <Link to="/" className='ungleCover'></Link>
        
    </div>
  )
}

export default Cart