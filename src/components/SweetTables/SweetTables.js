import React from 'react'
import image1 from '../../images/table-gallery/1.jpg'
import image2 from '../../images/table-gallery/2.jpg'
import image3 from '../../images/table-gallery/3.jpg'
import image4 from '../../images/table-gallery/4.jpg'
import image5 from '../../images/table-gallery/5.jpg'
import image6 from '../../images/table-gallery/6.jpg'

const SweetTables = () => {
    return (
        <section className="cakes-offert">   
            <h1 className="cakes-offert__title">Słodkie stoły</h1>
            <div className="cakes-offert__lists">
                <ul className="cakes-offert__list">
                    <li className="cakes-offert__list-item">Sernik Pistacjowy (14 kawałków) - 160zł</li> 
                    <li className="cakes-offert__list-item">Szarlotka (12 kawałków) - 95zł</li>
                    <li className="cakes-offert__list-item">Brownie  z kremem i karmelem (14 kawałków) - 115zł</li> 
                    <li className="cakes-offert__list-item">Tarta cytrynowa (12 kawałków) -  95zł</li> 
                    <li className="cakes-offert__list-item">Tarta oreo (wysoka)  (12 kawałków) -  115zł</li> 
                    <li className="cakes-offert__list-item">Tarta czekoladowo porzeczkowa (wysoka) (12 kawałków) - 115zł</li> 
                    <li className="cakes-offert__list-item">Ciasto Ferrero na biszkopcie (14 kawałków) - 115zł</li> 
                    <li className="cakes-offert__list-item">Ciasto Raffaello na biszkopcie  (14 kawałków) - 115zł</li> 
                    <li className="cakes-offert__list-item">Beza (9-10 porcji) smak: Mango marakuja, smak: Porzeczka śmietanka, smak: orzech, kawa, czekolada - 115zł</li> 
                </ul>
            </div>
            <div className="gallery-layout">
                <div className="gallery-row">
                    <img src={image1} alt="1" className="gallery-image"/>

                    <img src={image2} alt="2" className="gallery-image"/>

                    <img src={image3} alt="3" className="gallery-image"/>
                </div>

                <div className="gallery-row">
                    <img src={image4} alt="4" className="gallery-image"/>

                    <img src={image5} alt="5" className="gallery-image"/>

                    <img src={image6} alt="6" className="gallery-image"/>
                </div>

            </div>
        </section>
    )
}

export default SweetTables