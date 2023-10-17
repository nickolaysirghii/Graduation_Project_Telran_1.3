import React from 'react';
import "./catElems.css";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const CatElems = ({data}) => {
  const { mob } = useSelector((state)=>state.allProducts);
  return (
    <Link to={`/categories/${data.id}`} className={`${mob}catElement`}>
        <div style={{backgroundImage: `url(http://localhost:3333/${data.image})`}}></div>
        <p>{data.title}</p>
    </Link>
  )
}

export default CatElems