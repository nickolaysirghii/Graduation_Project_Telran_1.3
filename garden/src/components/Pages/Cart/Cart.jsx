import React from 'react';
import "./cart2.css";
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

const {mob} = useSelector((state)=>state.allProducts);

return (
  <div className={`${mob}cartMainContainer`}>
  <h2 className={`${mob}ShoppingCart`}>Shopping cart</h2>
  <div className={`${mob}StoreBelow`}>
      <div className={`${mob}StoreElements`}>
          <p className={`${mob}backToStore`}>Back to the store<Link to="/products/all"></Link></p>
          {
             productsAll.map((elem,idx)=>{
               let checkAmount = 0;
               cartData.forEach((check)=>{
                 if(elem.id === check.id){                  checkAmount = check.amount
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
      <form onSubmit={sendOdrer} className={`${mob}CartBuy`}>
          <p className={`${mob}CartByTitle`}>Order details</p>
          <div className={`${mob}TotContainerDetails`}>
              <p className={`${mob}TottalCartleft`}>Total</p>
              <p className={`${mob}totMoneyHere`}>{TotalMoney.toFixed(2)}<span>$</span></p>
          </div>
          <input className={`${mob}Innnp`} type='text'placeholder='Phone number' name='phone1'/>
          <button className={`${mob}orderButton`}>
          <p>{sendStatus ? "Thank You " : "Order"}</p>
                   {
                    sendStatus && <p className='The_Bee_message'>Wait for the bee, she is already flying to you !!! </p>
                   }
                   {
                    didntIntrouce && <div className='NoData'>
                       You forgot to enter your phone number !
                     </div>
                   }
          </button>
      </form>
      
  </div>
  </div>
)

}

export default Cart