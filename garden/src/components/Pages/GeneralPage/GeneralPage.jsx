import React from 'react'; 
import "./generalPage.css";
import EveryProduct from './EveryProduct/EveryProduct';
import { useSelector , useDispatch } from 'react-redux';
import { saleFilter,priceFrom,priceTo,sortedBy } from '../../../reduxStore/Slices/fetchProductsAll';

const GeneralPage = ({title , data}) => {

  const { FROM , TO , SortData , CheckSale , cartData } = useSelector((state)=>state.allProducts);
  const dispatcher = useDispatch();
  const data2 = [...data];
  let sortedArray = [];
  let saleArray = [];

  if(CheckSale){
   saleArray = data2.filter((elem)=>elem.discont_price)
  }else{
    saleArray = data2
  }
  if(SortData === "default"){
    sortedArray = saleArray;
  }else if(SortData === "first"){
    sortedArray = saleArray.sort((a,b)=>(a.discont_price ? a.discont_price : a.price) - b.price);
  }else if(SortData === "second"){
    sortedArray = saleArray.sort((a,b)=>b.price - (a.discont_price ? a.discont_price : a.price));
  }else if(SortData === "text"){
    sortedArray = saleArray.sort((a,b)=>a.title.localeCompare(b.title))
  }
 
          const checkSale = ()=>{dispatcher(saleFilter());};
          const fromFunction = (e)=>{dispatcher(priceFrom(e.target.value))};
          const tofunction = (e)=>{dispatcher(priceTo(e.target.value))};
          const sortedByFunction = (e)=>{dispatcher(sortedBy(e.target.value))};

return (
        <div className='tools'>
            < h2 className='titleTools'>{title}</h2>
            <form className='toolsForm'>
                <p className='toolPrice'>Price</p>
                     <input onChange={fromFunction}  className='from' type='text' placeholder='from'/>
                     <input onChange={tofunction} className='to' type='text' placeholder='to' />
                <p className='disItems'>Discounted items</p>
                     <input onChange={checkSale} className='checkBox' type='checkBox'/>
                <p className='sortedTools'>Sorted</p>
                    <select onChange={sortedByFunction} className='sortedInput' placeholder='by default' type='text'>
                      <option value="default">By default</option>
                      <option value="first"> From Lower Price</option>
                      <option value="second">From Higher Price</option>
                      <option value="text">By Title A-Z</option>
                      
                    </select>
            </form>
            <div className='toolContainer'>
                  {
                      sortedArray.map((elem , idx)=>{
                        let checkAmount = false;
                        cartData.forEach((check)=>{
                          if(elem.id === check.id){
                            checkAmount = check.amount
                          }
                        })
                          if(elem.price >= FROM && elem.price <= TO)
                              {return <EveryProduct elem={elem} amount={checkAmount} key={idx}>{}</EveryProduct>}
                          else{return null}
                             })
                  }
            </div>
        </div>
      )
    }
    

export default GeneralPage