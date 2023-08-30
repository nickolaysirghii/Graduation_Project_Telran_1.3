import React from 'react';
import "./catalog.css";
import { Link } from 'react-router-dom';
import CatalogIndex from './caalogIndex/CatalogIndex';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const Catalog = () => {
const data = useSelector((state)=>state.allcategoryes.categoryesAll)
  return (
    <div className='catalog'>
        <h2 className='catalogTitle'>Catalog</h2>
        <Link to="/categories"><button>All categories</button></Link>
        <div className='catalogContainer'>
         {
          data.map((elem,idx)=>{
            return <CatalogIndex key={idx} elem={elem}></CatalogIndex>
          })
         }
        </div>
    </div>
  )
}

export default Catalog