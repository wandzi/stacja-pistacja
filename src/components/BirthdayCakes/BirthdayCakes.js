import React from 'react'
import image1 from '../../images/birthday-cake-gallery/1.jpg'
import image2 from '../../images/birthday-cake-gallery/2.jpg'
import image3 from '../../images/birthday-cake-gallery/3.jpg'
import image4 from '../../images/birthday-cake-gallery/4.jpg'
import image5 from '../../images/birthday-cake-gallery/5.jpg'
import image6 from '../../images/birthday-cake-gallery/6.jpg'
import image7 from '../../images/birthday-cake-gallery/7.jpg'
import './BirthdayCakes.scss'

const BirthdayCakes = () => {
    return (
        <section className="cakes-offert">   
            <h1 className="cakes-offert__title">Torty</h1>
            <div className="cakes-offert__birthday-cakes">
                <p className="cakes-offert__birthday-cakes-description"> Cena tortu zależna jest od dekoracji jak i ilości porcji. Najmniejszy tort jaki możesz zamówić jest na 8-10 porcji. 
                    Ceny są ustalane indywidualnie. Jeśli chcesz zamówić tort lub inne słodkości, koniecznie napisz termin realizacji oraz ilość porcji.
                </p>
                <p className="cakes-offert__birthday-cakes-description"> Nie czekaj do ostatniej chwili! Poniżej prezentuje smaki jakie mamy dostępne w naszej ofercie:</p>
                <ul className="cakes-offert__list--birthday-cakes">
                    <li className="cakes-offert__list-item--birthday-cakes">Krem pistacjowy z kremem malinowym i frużeliną malinową plus krem krem biała czekolada.</li> 
                    <li className="cakes-offert__list-item--birthday-cakes">Krem oreo z kremem mleczna czekolada i żelka porzeczkowa.</li>
                    <li className="cakes-offert__list-item--birthday-cakes">Krem mango z żelką mango marakuja plis krem malinowy z malinami.</li> 
                    <li className="cakes-offert__list-item--birthday-cakes">Krem malinowy z chrupką i owocami plus krem porzeczkowy z żelką.</li> 
                    <li className="cakes-offert__list-item--birthday-cakes">Krem biała czekolada z chrupką plus krem malinowy z  owocami.</li> 
                    <li className="cakes-offert__list-item--birthday-cakes">Krem solony karmel z kremem czekoladowym i chrupką oraz żelką porzeczkową.</li> 
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
                <div class="grid-item grid-item-7">
                    <img src={image7} alt="7" />
                </div>
            </div>
        </section>
    )
}

export default BirthdayCakes