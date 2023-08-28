import React from 'react';
import GeneralPage from "../GeneralPage/GeneralPage"
import { useSelector } from 'react-redux';

const AllProducts = () => {
    const productsAll = useSelector((state)=>state.allProducts.productsAll)
    const productsAll2 = useSelector((state)=>state.allProducts2.cartData)
 console.log(productsAll2)
  return (
    <GeneralPage title="All Products" data={productsAll}/>
  )
}

export default AllProducts