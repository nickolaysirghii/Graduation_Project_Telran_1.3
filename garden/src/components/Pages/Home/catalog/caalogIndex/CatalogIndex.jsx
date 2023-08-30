import React from 'react';
import "./catalogIndex.css";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';



const CatalogIndex = ({elem}) => { 
  const dispatcher = useDispatch();

   if(elem.id < 5){
  return (
    <Link /*onClick={changeCat_cat}*/ to={`/categories/${elem.id}`} className='catIndex'>
        <div className='indexImage' style={{backgroundImage: `url(http://localhost:3333/${elem.image})`}}></div>
        <p>{elem.title}</p>
    </Link>
  )
}else{
  return null
}
}

export default CatalogIndex