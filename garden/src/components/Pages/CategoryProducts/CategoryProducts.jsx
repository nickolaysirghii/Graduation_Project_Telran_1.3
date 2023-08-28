import React from 'react';
import GeneralPage from "../GeneralPage/GeneralPage";
import { useSelector } from 'react-redux';

const CategoryProducts = () => {
    const CategoryProducts = useSelector((state)=>state.categoryProducts.categoryProducts);
    const category2 = useSelector((state)=>state.allProducts.productsAll);
    const  { category , data } =  CategoryProducts;
    console.log()
    

    if(data){
         return (<GeneralPage title={category.title} data={data} />)
    }else{
      return ( <p> "Loading </p>)
    }
}

export default CategoryProducts