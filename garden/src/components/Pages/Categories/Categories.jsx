import React from 'react';
import "./categories2.css";
import EachCat from './EachCat/EachCat';
import { useSelector} from "react-redux";

const Categories = () => {
  
  const { categoryesAll } = useSelector((state)=>state.allcategoryes);
  const {mob} = useSelector((state)=>state.allProducts);
  return (
    <div>
    <h2 className={`${mob}CategoriesTitle`}>Categories</h2>
    <div className={`${mob}CategoriesElements`}>
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