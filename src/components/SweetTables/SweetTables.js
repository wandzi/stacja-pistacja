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
            <div class="grid-layout">
                <div class="grid-item grid-item-1">
                    <img src={image1} alt="1" />
                </div>
                <div class="grid-item grid-item-2">
                    <img src={image2} alt="2" />
                </div>
                <div class="grid-item span-3 grid-item-3">
                    <img src={image3} alt="3" />
                </div>
                <div class="grid-item grid-item-4">
                    <img src={image4} alt="4" />
                </div>
                <div class="grid-item span-2 grid-item-5">
                    <img src={image5} alt="5" />
                </div>
                <div class="grid-item grid-item-6">
                    <img src={image6} alt="6" />
                </div>
            </div>
        </section>
    )
}

export default SweetTables