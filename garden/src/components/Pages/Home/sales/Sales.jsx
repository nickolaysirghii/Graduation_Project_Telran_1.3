import React from 'react';
import "./sales.css";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Sales = () => {
  const { mob } = useSelector((state)=>state.allProducts);
  return (
    <div className={`${mob}saleContainer`}>
    <div className={`${mob}NewSaleBush`}></div>
    <p className={`${mob}NewSaleTitle`}><span>Sale</span><br />New season</p>
    <Link to="/sales/all"><button>Sale</button></Link>
    </div>
  )
  
}

export default Sales