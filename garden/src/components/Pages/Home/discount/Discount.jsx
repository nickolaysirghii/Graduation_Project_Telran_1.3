import React from 'react';
import "./discount.css";
import {useDispatch} from "react-redux";
// import axios from "axios"

const Discount = () => {
  const dispatcher = useDispatch();

  return (
    <div className='discount'>
        <div className='elf'></div>
        <strong>5% off</strong>
        <p>on the first order</p>
        <form /* onSubmit={postDiscount11}*/>
            <input type='text' defaultValue="+49" name='discont'/>
            <button>Get a discount</button>
        </form>
    </div>
  )
}

export default Discount