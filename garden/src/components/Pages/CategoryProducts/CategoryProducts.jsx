import React from 'react';
import GeneralPage from "../GeneralPage/GeneralPage";
import  Categories from "../Categories/Categories";
import { useSelector } from 'react-redux';


const CategoryProducts = () => {
    const  { category , data } =  useSelector((state)=>state.categoryProducts.categoryProducts);

    if(data){
         return (<GeneralPage title={category.title} data={data} />)
    }else{
         return ( <Categories/>)
    }
}

export default CategoryProducts