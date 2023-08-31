import React , { useEffect } from 'react';
import GeneralPage from "../GeneralPage/GeneralPage";
import { fetchCategoryProducts } from '../../../reduxStore/Slices/fechCategoryProdcts';
import { useSelector , useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';



const CategoryProducts = () => {
    const params = useParams();
    const dispatcher = useDispatch();
    useEffect(()=>{dispatcher(fetchCategoryProducts(params.id))},[])


    const {categoryProducts , categoryTitle}=  useSelector((state)=>state.categoryProducts);
    

    
         return (<GeneralPage title={categoryTitle} data={categoryProducts} />)
   
}

export default CategoryProducts