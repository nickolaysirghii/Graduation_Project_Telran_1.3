import React from 'react';
import "./eachCat.css";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { fetchCategoryProducts } from '../../../../reduxStore/Slices/fechCategoryProdcts';



const EachCat = ({elem}) => {
 const { image , id , title } = elem;
 const dispatcher = useDispatch();
 const changeEachCategory = ()=>{
  dispatcher(fetchCategoryProducts(id))
 }
  return (
    <Link onClick={changeEachCategory} to={`/categories/${id}`}  className='everyCategory'>
        <div className='image45' style={{backgroundImage: `url(http://localhost:3333/${image})`}}></div>
        <p>{title}</p>
    
    </Link>
  )
}

export default EachCat