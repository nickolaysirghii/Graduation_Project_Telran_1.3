import React from 'react';
import "./header2.css";
import { BarData } from './HeaderBarData';
import BarInfo from './BarInfo/BarInfo';

const HeaderBar = () => {
 
  return (
    <div className='HeadBarContainer'>
        {
            BarData.map((elem,idx)=>{
                return <BarInfo key={idx} data={elem} />
            })
        }
    </div>
  )
}

export default HeaderBar