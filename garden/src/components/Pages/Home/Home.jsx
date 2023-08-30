import React from 'react';
import "./home.css";
import Sales from "./sales/Sales";
import Catalog from './catalog/Catalog';
import Discount from './discount/Discount';
import SaleRandom from './saleRendom/SaleRandom';

const Home = () => {
  localStorage.removeItem("category")
  localStorage.removeItem("eachProduct")
 return (
    <div className='home'>
      <Sales />
      <Catalog />
      <Discount />
      <SaleRandom />
    
    
    </div>
  )
}

export default Home