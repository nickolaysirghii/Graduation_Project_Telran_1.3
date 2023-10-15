import React from 'react';
import "./catalog.css";
import CatElems from "./CatalogElements/CatElems";
import { useSelector } from 'react-redux/es/hooks/useSelector';

const Catalog = () => {

const { categoryesAll } = useSelector((state)=>state.allcategoryes);
const { mob } = useSelector((state)=>state.allProducts);
const four = categoryesAll.slice(0, 4)

return (
  <div className={`${mob}catalogContainer`}>
   <div className={`${mob}catologTitle`}>
    <p>Catalog</p>
    <a href='/categories'><button>All categories</button></a>
   </div>
   <div className={`${mob}catalogElementsContainer`}>
   {
    four.map((elem,idx)=>{
      return <CatElems key={idx} data={elem} />
    })
   }
   </div>
  </div>
)
}

export default Catalog