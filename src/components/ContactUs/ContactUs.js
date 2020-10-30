import React from "react"
import Socials from '../Socials/Socials'
import logo from '../../images/logo.jpg'
import telephoneIcon from '../../images/phone.svg'
import mailIcon from '../../images/mail.svg'

import './ContactUs.scss'

const ContactUs = () => {
  return (
    <section className="contact-us">
        <img src={logo} className="contact-us__logo" alt="logo" />
        <div className="contact-us__details">
            <a href="mailto:stacjapistacjaa@gmail.com" rel="noreferrer" className="contact-us__contact-details">
                <img src={mailIcon} className="contact-us__icon" alt="phone-icon" />
                <h1 className="contact-us__address">stacjapistacjaa@gmail.com</h1>
            </a>
            <a href="tel:666-638-256" rel="noreferrer" className="contact-us__contact-details">
                <img src={telephoneIcon} className="contact-us__icon" alt="mail-icon" />
                <h1 className="contact-us__address">666-638-256</h1>
            </a>
        </div>
        <Socials />
    </section>
  ) 
}

export default ContactUs