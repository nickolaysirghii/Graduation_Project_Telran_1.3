import React from 'react';
import "./saleRandom.css"
import RandomeElement from './randomeElement/RandomeElement';
import { useSelector} from 'react-redux';


const SaleRandom = () => {
  const { productsAll } = useSelector((state)=>state.allProducts);
  const SalesArray = productsAll.filter((elem)=>elem.discont_price)

  const  shuffleArray = (arr)=> {
  const shuffledArray = [...arr]; 
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); 

    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
  }

  const RandomElements = shuffleArray(SalesArray)
  const threeOfThem = RandomElements.slice(0,3)

return (
    <div className='saleRandom'>
        <h2>Sale</h2>
        <div className='randomContainer'>
          {
            threeOfThem.map((elem,idx)=>{
              return <RandomeElement elemR={elem} key={idx}></RandomeElement>
            })
          }
        </div>
    </div>
  )
}

export default SaleRandom