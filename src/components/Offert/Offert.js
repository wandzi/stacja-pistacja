import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'

import instagramLogo from '../../images/instagram-brands.svg'
import facebookLogo from '../../images/facebook-brands.svg'
import './Offert.scss'

const Offert = () => {

    const data = useStaticQuery(graphql`
        query Offer {
            tableCake: file(relativePath: {eq: "cake_table.jpg"}) {
                id
                childImageSharp {
                    fixed {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            cakes: file(relativePath: {eq: "cakes.jpg"}) {
                id
                childImageSharp {
                    fixed {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            birthdayCake: file(relativePath: {eq: "birthday_cake.jpg"}) {
                id
                childImageSharp {
                    fixed {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            logo: file(relativePath: {eq: "logo.jpg"}) {
                id
                childImageSharp {
                    fixed {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `)

    return (
        <section className="offert">
            <h1 className="offert__title">Oferta:</h1>
            <div className="flex">
                <div className="offert__photo-container">
                    <Img
                    fixed={data.tableCake.childImageSharp.fixed}
                    className="offert__image"
                    />
                    <div className="offert__image-caption">
                        <h2 className="offert__image-caption-title">Słodki stół</h2>
                    </div>
                </div>
                <div className="offert__photo-container">
                    <Img
                    fixed={data.cakes.childImageSharp.fixed}
                    className="offert__image"
                    />
                    <div className="offert__image-caption">
                        <h2 className="offert__image-caption-title">Ciasta i małe słodkości</h2>
                    </div>
                </div>
                <div className="offert__photo-container">
                    <Img
                    fixed={data.birthdayCake.childImageSharp.fixed}
                    className="offert__image"
                    />
                    <div className="offert__image-caption">
                        <h2 className="offert__image-caption-title">Torty</h2>
                    </div>
                </div>
            </div>

            <h3 className="offert__kicker">
                Chcesz poznać szczegółową ofertę, bądź zarezerwować termin? 
                <br/> 
                Napisz do mnie na <a href="mailto:stacjapistacjaa@gmail.com" className="offert__contact-details">stacjapistacjaa@gmail.com</a>, bądź zadzwoń <a href="tel:666-638-256" className="offert__contact-details">666-638-256</a>
            </h3>

            <Img fixed={data.logo.childImageSharp.fixed}/>

            <div className="offert__social-container">
                <a href="https://www.facebook.com/Stacja-Pistacja-2237274909854496" target="_blank" className="offert__social-link">
                    <img className="offert__social-logo" src={instagramLogo} alt="instagram-logo" />
                    <h1 className="ofert__social-username">Stacja_pistacja</h1>
                </a>
                
                <a href="https://www.facebook.com/Stacja-Pistacja-2237274909854496" target="_blank" className="offert__social-link">
                    <img className="offert__social-logo" src={facebookLogo} alt="facebook-logo" />
                    <h1 className="ofert__social-username">Stacja Pistacja</h1>
                </a>
            </div>
      
        </section>
    )
}
    


export default Offert
