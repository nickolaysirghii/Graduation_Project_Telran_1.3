import React from 'react';
import "./discount.css";
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

  return (
    <div className='discount'>
        <div className='elf'></div>
        <strong>5% off</strong>
        <p>on the first order</p>
        <form  onSubmit={sendDiscountRequest}>
            <input type='text' defaultValue="+49" name='discont'/>
            <button>
              {
                sendDiscountStatus ? "Thank you , the request was sended !" : "Get a discount"
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