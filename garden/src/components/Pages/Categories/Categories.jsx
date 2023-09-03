import React from 'react';
import "./categories.css";
import EachCat from './EachCat/EachCat';
import { useSelector} from "react-redux";

const Categories = () => {
  
  const { categoryesAll } = useSelector((state)=>state.allcategoryes);
 
  return (
    <div className='categories'>
      <h2>Categories</h2>
      <div className='catContainer'>
        {
          categoryesAll.map((elem,idx)=>{
            return <EachCat elem={elem} key={idx}>{elem.title}</EachCat>
          })
        }
      </div>
    </div>
  )
}

export default Categories