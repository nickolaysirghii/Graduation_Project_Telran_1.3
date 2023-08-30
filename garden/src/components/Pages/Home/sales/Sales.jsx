import React from 'react';
import "./sales.css";
import { Link } from 'react-router-dom';

const Sales = () => {
  return (
    <div className='sales'>
    <p className='title'>Sale</p>
    <p className='season'>New season</p>
   <Link to="/sales/all"><button>Sale</button></Link>   
    <div className='bush'></div>
    
    </div>
  )
}

export default Sales