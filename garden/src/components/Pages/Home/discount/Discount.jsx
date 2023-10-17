import React from 'react';
import "./getSale.css";
import axios from "axios"
import { useSelector , useDispatch } from 'react-redux';
import { discountRequest } from '../../../../reduxStore/Slices/fetchProductsAll';
import { changeDidnt } from '../../../../reduxStore/Slices/animation';

const Discount = () => {
  const dispatcher = useDispatch();
  const { sendDiscountStatus } = useSelector((state)=>state.allProducts);
  const { didntIntrouce } = useSelector((state)=>state.animation);

  const sendDiscountRequest = (e)=>{
   e.preventDefault();
   if(e.target.discont.value !== "+49"){
    axios.post('http://localhost:3333/sale/send', {
    title: "I want Discount",
    phone: e.target.discont.value
  });
  dispatcher(discountRequest(true));
   e.target.reset();
  }else{
    
    dispatcher(changeDidnt(true))
  }
  }
  if(sendDiscountStatus || didntIntrouce ){
    setTimeout(() => {
    dispatcher(discountRequest(false))
    dispatcher(changeDidnt(false))
  }, 3000);}

  const { mob } = useSelector((state)=>state.allProducts);

  return (
    <div className={`${mob}getSaleContainer`}>
    <div className={`${mob}hobit`}></div>
    <form onSubmit={sendDiscountRequest} className={`${mob}getSaleInfo`}>
      <p className={`${mob}off`}>5% off</p>
      <p className={`${mob}belowOff`}>on the first order</p>
      <input type='text'defaultValue='+49' name='discont'/><br/>
      <button>

               {
                <div className={`${mob}thanking`}>{sendDiscountStatus ? "Thank you , the request was sended !" : "Get a discount"}</div>



               }
               {
                  didntIntrouce && <div className='warning'>
                   You forgot to enter your phone number !
                 </div>
               }
      </button>
    </form>
    </div>
  )
}

export default Discount