import React from 'react';
import "./cart.css";
import CartProduct from './CartProduct/CartProduct';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { useSelector , useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { sended } from '../../reduxStore/slice/products_all';


const Cart = () => {
  const cartProucts = useSelector((state)=>state.productsAll.products);
  const sendStatus = useSelector((state)=>state.productsAll.sended);


  const dispatcher = useDispatch();
  const cart = [];
  cartProucts.forEach((elem)=>{
    if(elem.amount){
      cart.push(elem)
    }
  })

 
let car = 0;
  cartProucts.forEach((elem) => {
    if(elem.amount){
    car = car + ( (elem.discont_price ? elem.discont_price : elem.price )* elem.amount)
    }
  })

  const PostPurchase = (e) =>{
    e.preventDefault()
    const phone = e.target.phone1.value;
    const object_to_send = {
      products: cart,
      phone
    }
    axios.post("http://localhost:3333/order/send",object_to_send)
    .then(ress => console.log(ress))
    dispatcher(sended())
    localStorage.removeItem("garden")
   e.target.reset()
  }
  

return (
    <div className='cart'>
        <h2 className='cartTitle'>Shopping cart</h2>
        <p className='backToStore'>Back to the store</p>
        <Link to="/"><FontAwesomeIcon className='letAngle' icon={faAngleRight} /></Link>
        <div className='cartContainer'>
         {
            cartProucts.map((elem,idx)=>{
              if(elem.amount){
                return <CartProduct key={idx} element = {elem} idx={idx}/>
              }else 
              return null
  
              
            })
          }
        
  
        </div>
        <form onSubmit={PostPurchase} className='orderDetails'>
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