import React from 'react';
import "./discount.css";
import axios from "axios"

const Discount = () => {

  const sendDiscountRequest = (e)=>{
   e.preventDefault();
   axios.post('http://localhost:3333/order/send', {
    title: "I want Discount",
    phone: e.target.discont.value
  });
   e.target.reset();
  }

  return (
    <div className='discount'>
        <div className='elf'></div>
        <strong>5% off</strong>
        <p>on the first order</p>
        <form  onSubmit={sendDiscountRequest}>
            <input type='text' defaultValue="+49" name='discont'/>
            <button>Get a discount</button>
        </form>
    </div>
  )
}

export default Discount