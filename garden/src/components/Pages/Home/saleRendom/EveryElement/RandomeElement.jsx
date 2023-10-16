import React from 'react';
import "./randomeElllem.css";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RandomeElement = ({elem}) => {
    const {title , price , discont_price , percent , image , id } = elem;
    const { mob } = useSelector((state)=>state.allProducts);
  return (
    <div className={`${mob}rrCont`}>
      <Link to={`/products/${id}`}>
    <div className={`${mob}randomeImage`} style={{backgroundImage:`url(http://localhost:3333/${image})`}}></div>
      </Link>
    <div className={`${mob}priceInfo`}>
        <p className={`${mob}DiscontPrice`}>{discont_price}$</p>
        <p className={`${mob}price`}>{price}$</p>
        <p className={`${mob}DiscontPercent`}>{percent}</p>
    </div>
    <p className={`${mob}randomeElemTitle`}>{title}</p>
    </div>
  )
}

export default RandomeElement