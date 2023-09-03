import React from 'react';
import "./randomeElement.css";
import { Link } from 'react-router-dom';

const RandomeElement = ({elemR}) => {

    const discountPercent = (elemR.discont_price/elemR.price).toFixed(2);

  return (
    <Link to="/sales/all" className='randomeContainer2' >
        <div className='randomeImage34' style={{backgroundImage: `url(http://localhost:3333/${elemR.image})`}}></div>
        <p className='PriceRan'>{`${elemR.discont_price}$`}</p>
        <p className='oldPri11'>{`${elemR.price}$`}</p>
        <p className='percentRand'>{`-${discountPercent}%`}</p>
        <p className='descriptionRandome'>
           {elemR.title}
        </p>
    </Link>
  )
}

export default RandomeElement