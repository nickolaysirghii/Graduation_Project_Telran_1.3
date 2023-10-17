import React from 'react';
import "./footer.css"
import whatsUp from "../../svg/watsUp.svg";
import instagram from "../../svg/instagram.svg"
import { useSelector , useDispatch } from 'react-redux';
import { changeVersion } from '../../reduxStore/Slices/fetchProductsAll';

const Footer = () => {
   const { mob } = useSelector((state)=>state.allProducts);
   const dispatcher = useDispatch();
   const changeVersion22 = ()=>{
      const data = mob === "mob" ? "" : "mob";
      dispatcher(changeVersion(data))
   }
  return (
    <div className={`${mob}footerContainer`}>
     <h2>Contact<span>Address</span></h2>
     <div className={`${mob}footerPhone`}><p>+49 999 999 99 99</p><span>
      <a href='https://tel-ran.de/' target='_blank'>Linkstraße 2, 8 OG, 10785,<br/> Berlin, Deutschland</a></span></div>
     <div className={`${mob}footerWhatsUp`}>
        <a href='https://play.google.com/store/apps/details?id=com.instagram.android&hl=ro&gl=US' target='_blank' className={`${mob}social`}>
           <img src={instagram} alt='insta' />
           <p>Instagram</p>
        </a>
        <a href='https://www.whatsapp.com/' target='_blank' className={`${mob}social`}>
           <img src={whatsUp} alt='insta' />
           <p>WhatsApp</p>
        </a>
        <div className={`${mob}footerHours`}>
            <p>Working Hours:</p>
            <h4>24 hours a day</h4>
        </div>
     </div>
     <div className={`${mob}footerMap`}></div>
     <div onClick={changeVersion22} className={`${mob}Version`}>{mob ? "Full version" : "Mobile version"}</div>
    </div>
  )
}

export default Footer