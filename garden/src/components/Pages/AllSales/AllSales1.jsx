import React from 'react';
import GeneralPage from '../GeneralPage/GeneralPage';
import { useSelector } from 'react-redux';

const AllSales = () => {
  
    const {productsAll} = useSelector((state)=>state.allProducts);
    const data = productsAll.filter((elem)=>elem.discont_price);

  return (
    <GeneralPage title="All sales" data={data} />
  )
}

export default AllSales