import React from 'react';
import "./catalogIndex.css";
import { Link } from 'react-router-dom';

const CatalogIndex = ({elem}) => { 
  
 if(elem.id < 5){
  return (
    <Link to={`/categories/${elem.id}`} className='catIndex'>
        <div className='indexImage' style={{backgroundImage: `url(http://localhost:3333/${elem.image})`}}></div>
        <p>{elem.title}</p>
    </Link>
  )
}else{
  return null
}
}

export default CatalogIndex