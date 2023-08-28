import React from 'react';
import "./categories.css";
import { useSelector} from "react-redux";
import EachCat from './EachCat/EachCat';

const Categories = () => {
  const categoryes = useSelector((state)=>state.allcategoryes.categoryesAll);
 
  return (
    <div className='categories'>
      <h2>Categories</h2>
      <div className='catContainer'>
        {
          categoryes.map((elem,idx)=>{
            return <EachCat elem={elem} key={idx}>{elem.title}</EachCat>
          })
        }
      </div>
    </div>
  )
}

export default Categories