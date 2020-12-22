import React from "react"
import instagramLogo from '../../images/instagram-brands.svg'
import facebookLogo from '../../images/facebook-brands.svg'

import './Socials.scss'

const Socials = () => {
  return (
    <div className="social-container">
        <a href="https://www.instagram.com/stacjapistacjaa_/" target="_blank" rel="noreferrer" className="social-container__social-link">
            <img className="social-container__social-logo" src={instagramLogo} alt="instagram-logo" />
            <h1 className="social-container__social-username">stacjapistacjaa_</h1>
        </a>
        
        <a href="https://www.facebook.com/Stacja-Pistacja-2237274909854496" target="_blank" rel="noreferrer" className="social-container__social-link">
            <img className="social-container__social-logo" src={facebookLogo} alt="facebook-logo" />
            <h1 className="social-container__social-username">Stacja Pistacja</h1>
        </a>
    </div>
  ) 
}

export default Socials