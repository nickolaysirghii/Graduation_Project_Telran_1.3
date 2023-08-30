import React from 'react';
import GeneralPage from "../GeneralPage/GeneralPage"
import { useSelector } from 'react-redux';

const AllProducts = () => {
    const productsAll = useSelector((state)=>state.allProducts.productsAll)
  return (
    <GeneralPage title="All Products" data={productsAll}/>
  )
}

export default AllProducts