import React , { useEffect } from 'react';
import GeneralPage from "../GeneralPage/GeneralPage";
import { fetchCategoryProducts } from '../../../reduxStore/Slices/fechCategoryProdcts';
import { useSelector , useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

const CategoryProducts = () => {

    const {categoryProducts , categoryTitle}=  useSelector((state)=>state.categoryProducts);
    const params = useParams();
    const dispatcher = useDispatch();
    useEffect(()=>{dispatcher(fetchCategoryProducts(params.id))},[])

return (<GeneralPage title={categoryTitle} data={categoryProducts} />)
   
}

export default CategoryProducts