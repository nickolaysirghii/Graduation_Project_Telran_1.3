import React from 'react';
import "../categories2.css";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { fetchCategoryProducts } from '../../../../reduxStore/Slices/fechCategoryProdcts';

const EachCat = ({elem}) => {

 const { image , id , title } = elem;
 const dispatcher = useDispatch();
 const changeEachCategory = ()=>{ dispatcher(fetchCategoryProducts(id))};

 const mob = window.innerWidth > 800 ? "" : "mob";
 return (
   <Link onClick={changeEachCategory} to={`/categories/${id}`} className='EvCatCon'>
     <div className={`${mob}evCatImage`} style={{backgroundImage: `url(http://localhost:3333/${image})`}}></div>
     <p className={`${mob}EvCatTitle`}>{title}</p>
   </Link>
 )

}

export default EachCat