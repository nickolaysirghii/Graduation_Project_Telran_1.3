import React from 'react'; 
import "./generalPage.css";
import EveryProduct from './EveryProduct/EveryProduct';
import { useSelector , useDispatch } from 'react-redux';
import { saleFilter,priceFrom,priceTo,sortedBy } from '../../../reduxStore/Slices/fetchProductsAll';



const GeneralPage = () => {
  const { productsAll ,FROM , TO } = useSelector((state)=>state.allProducts);
  const dispatcher = useDispatch()
 
          const checkSale = ()=>{dispatcher(saleFilter())};
          const fromFunction = (e)=>{dispatcher(priceFrom(e.target.value))};
          const tofunction = (e)=>{dispatcher(priceTo(e.target.value))};
           const sortedByFunction = (e)=>{dispatcher(sortedBy(e.target.value))};
const title = "Hallo"

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
                      productsAll.map((elem , idx)=>{
                          if(elem.price >= FROM && elem.price <= TO)
                              {return <EveryProduct idx={idx} elem={elem} key={idx}>{}</EveryProduct>}
                          else{return null}
                             })
                  }
            </div>
        </div>
      )
    }
    

export default GeneralPage