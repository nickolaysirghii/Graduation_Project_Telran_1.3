import React from 'react';
import GeneralPage from '../GeneralPage/GeneralPage';
import { useSelector } from 'react-redux';

const AllSales = () => {
    const takeData = useSelector((state)=>state.allProducts.productsAll);
    const data = takeData.filter((elem)=>elem.discont_price);

  return (
    <GeneralPage title="All sales" data={data} />
  )
}

export default AllSales