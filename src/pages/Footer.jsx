import React from 'react'
import {FaFacebook,FaGlobe} from 'react-icons/fa'
import {IoLogoWhatsapp} from 'react-icons/io'
import '../styles/Footer.css'
const Footer = () => {
    let iconsize='30px', iconcolor="white"
  return (
       <footer>
        <div className="row">
            <IoLogoWhatsapp size={iconsize} color={iconcolor}/>
            <a href='www.crigroups.com'>Toll free 1800 200 1234</a>
        </div>
        <div className="row">
            <FaFacebook  size={iconsize} color={iconcolor}/>
            <a href='www.facebook/crigroups.com'>www.facebook/crigroups.com</a>
        </div>
        <div className="row">
            <FaGlobe  size={iconsize} color={iconcolor}/>
            <a href='www.crigroups.com'>www.crigroups.com</a>
        </div>
       </footer>
  )
}

export default Footer