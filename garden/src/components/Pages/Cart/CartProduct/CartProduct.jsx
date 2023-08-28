import React from 'react';
import "./cartProduct.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from "react-redux";
import { deleteFromCart,increaseAmount,decreaseAmount } from '../../../../reduxStore/Slices/fetchProductsAll';

const CartProduct = ({element , amount , total}) => {
 const { discont_price,price} = element;
 const dispatcher = useDispatch();

const deleteProduct = () =>{dispatcher(deleteFromCart(element.id ))}
const increaseProduct = () =>{dispatcher(increaseAmount(element.id))}
const decreaseProduct = () =>{dispatcher(decreaseAmount(element.id))}
 
  return (
    <div className='cartProduct'>
        <div className='cartImageProduct'style={{backgroundImage:`url(http://localhost:3333/${element.image})`}}></div>
        <div className='desProCart'>{element.title}</div>
        <div className='amount'>
            <p className='decrees' onClick={decreaseProduct}>-</p>
            <p className='amountNumber'>{amount}</p>
            <p className='increase' onClick={increaseProduct}>+</p>
        </div>
        <p className='cartProdPrice'>{discont_price ? (discont_price*amount).toFixed(2) : (price*amount).toFixed(2)}
        <span className='dollar33'>$</span>
        </p>
        {
         discont_price && <p className='oldPriceCart'>{`${(price*amount).toFixed(2)}$`}</p>
        }
        
        <FontAwesomeIcon className='deleteProdCart' icon={faXmark} onClick={deleteProduct} />
    </div>
  )
}

export default CartProduct