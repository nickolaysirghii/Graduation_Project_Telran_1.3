import React from 'react';
import "./discount.css";
import axios from "axios"
import { useSelector , useDispatch } from 'react-redux';
import { discountRequest } from '../../../../reduxStore/Slices/fetchProductsAll';

const Discount = () => {
  const dispatcher = useDispatch();
  const { sendDiscountStatus } = useSelector((state)=>state.allProducts);


  const sendDiscountRequest = (e)=>{
   e.preventDefault();
   axios.post('http://localhost:3333/order/send', {
    title: "I want Discount",
    phone: e.target.discont.value
  });
  dispatcher(discountRequest());
   e.target.reset();
  }
  if(sendDiscountStatus){setTimeout(() => {dispatcher(discountRequest())}, 3000);}

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
            </button>
        </form>
    </div>
  )
}

export default Discount