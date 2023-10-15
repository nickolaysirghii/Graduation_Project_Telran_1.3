import React from 'react';
import "./randomeElllem.css"

const RandomeElement = ({elem}) => {
    const {title , price , discont_price , percent } = elem;
    const mob = window.innerWidth > 800 ? "" : "mob";
  return (
    <div className={`${mob}rrCont`}>
    <div className={`${mob}randomeImage`}></div>
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