import React from 'react';
import "../header2.css";
import { Link } from 'react-router-dom';

const BarInfo = ({data}) => {
    const {title,path} = data
  return (
    <Link to={path} className='BarElement'>{title}</Link>
  )
}

export default BarInfo