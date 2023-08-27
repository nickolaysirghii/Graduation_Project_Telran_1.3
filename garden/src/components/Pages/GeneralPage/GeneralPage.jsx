import React from 'react'; 
import "./generalPage.css";
import EveryProduct from './EveryProduct/EveryProduct';
import { useSelector,useDispatch } from 'react-redux';



const GeneralPage = () => {
  const data = useSelector((state)=>state.allProducts.productsAll);
  const from = 0;
  const to = 10000;
  const checkIt = true;

  const Sorted = "Sorted"

const title = "Hallo"

return (
        <div className='tools'>
            < h2 className='titleTools'>{title}</h2>
            <form className='toolsForm'>
                <p className='toolPrice'>Price</p>
                     <input /*onChange={fromFunction}*/  className='from' type='text' placeholder='from'/>
                     <input  /*onChange={toFunction}*/ className='to' type='text' placeholder='to' />
                <p className='disItems'>Discounted items</p>
                     <input /*onChange={checkFunction}*/ className='checkBox' type='checkBox'/>
                <p className='sortedTools'>Sorted</p>
                    <select /*onChange={sortedFunction}*/ className='sortedInput' placeholder='by default' type='text'>
                      <option value="third">By default</option>
                      <option value="first"> From Lower Price</option>
                      <option value="second">From Higher Price</option>
                      <option value="text">By Title A-Z</option>
                      
                    </select>
            </form>
            <div className='toolContainer'>
            {

              data.map((elem , idx)=>{
                if(elem.price >= from && elem.price <= to && elem.discont_price >= checkIt){
              return <EveryProduct index={idx} element = {elem} key={idx}>{}</EveryProduct>
            }else{
              return null
            }
            })
           }
            </div>
        </div>
      )
    }
    

export default GeneralPage