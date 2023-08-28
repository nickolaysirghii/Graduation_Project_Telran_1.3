import React from 'react';
import "./header.css";
import bag from "../../svg/bag.svg";
import { Link } from 'react-router-dom';
import { useDispatch , useSelector } from "react-redux";
import { fetchProducts } from '../../reduxStore/Slices/fetchProductsAll';
import { fetchCategoryes } from '../../reduxStore/Slices/fetchCategries';
import { useEffect } from 'react';



const Header = () => {
  const dispatcher = useDispatch();
  const cartAmount = useSelector((state)=>state.allProducts.cartAmount);
  useEffect(()=>{dispatcher(fetchProducts());dispatcher(fetchCategoryes())},[]);

  return (
    <header className='header'>
           <Link to="/" className='logo'></Link>
           <Link to="/categories"><button>Catalog</button></Link>
           <div className='links'>
                  <Link to="/">Main Page</Link>
                  <Link to="/products/all" className='products'>All products</Link>
                  <Link to="/sales/all">All sales</Link>
           </div>
           <Link to="/cart"><img src={bag} alt='bag' className='bag'/></Link>
           <div className={cartAmount > 0 ? "cartAmount" : "cartHidden"}>{cartAmount}</div>
    </header>
  )
}

export default Header
