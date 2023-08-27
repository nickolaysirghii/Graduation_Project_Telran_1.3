import React from 'react';
import "./footer.css"
import whatsUp from "../../svg/watsUp.svg";
import instagram from "../../svg/instagram.svg"

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footerInfo'>
            <h2 className='contact'>Contact</h2>
            <h2 className='addres'>Address</h2>
            <p className='telephone'>+49 999 999 99 99</p>
            <a href='https://tel-ran.de/' className='strasse' target='_blank'>Linkstraße 2, 8 OG, 10785,<br></br> Berlin, Deutschland</a>
            <p className='hours'>Working Hours:</p>
            <p className='a_day'>24 hours a day</p>
            <a href='https://en.wikipedia.org/wiki/WhatsApp' target='_blank' className='whatsUpCont'>
            <img src={whatsUp} alt='WhatsUp' />
            <p>WhatsApp</p>
            </a>
            <a href='https://pl.wikipedia.org/wiki/Instagram' target='_blank' className='instaCont'>
            <img src={instagram} alt='insta' />
            <p>Instagram</p>
            </a>
        </div>
        <div className='googleMap'></div>
    </div>
  )
}

export default Footer