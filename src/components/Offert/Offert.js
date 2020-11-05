import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import Socials from '../Socials/Socials'
import './Offert.scss'

const Offert = () => {

    const data = useStaticQuery(graphql`
        query Offer {
            tableCake: file(relativePath: {eq: "slodki.jpg"}) {
                id
                childImageSharp {
                    fixed {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            cakes: file(relativePath: {eq: "ciasta.jpg"}) {
                id
                childImageSharp {
                    fixed {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            birthdayCake: file(relativePath: {eq: "tort.jpg"}) {
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
                <Link to="/oferta-slodki-stol">
                    <div className="offert__photo-container">
                        <Img
                        fixed={data.tableCake.childImageSharp.fixed}
                        className="offert__image"
                        />
                        <div className="offert__image-caption">
                            <h2 className="offert__image-caption-title">Słodki stół</h2>
                        </div>
                    </div>
                </Link>
                <Link to="/oferta-ciast">
                    <div className="offert__photo-container">
                        <Img
                            fixed={data.cakes.childImageSharp.fixed}
                            className="offert__image"
                        />
                        <div className="offert__image-caption">
                            <h2 className="offert__image-caption-title">Ciasta i małe słodkości</h2>
                        </div>
                    </div>
                </Link>
                <Link to="/oferta-tortow">
                    <div className="offert__photo-container">
                        <Img
                            fixed={data.birthdayCake.childImageSharp.fixed}
                            className="offert__image"
                        />
                        <div className="offert__image-caption">
                            <h2 className="offert__image-caption-title">Torty</h2>
                        </div>
                    </div>
                </Link>
            </div>

            <h3 className="offert__kicker">
                Chcesz poznać szczegółową ofertę, bądź zarezerwować termin? 
                <br/> 
                Napisz do mnie na <a href="mailto:stacjapistacjaa@gmail.com" rel="noreferrer" className="offert__contact-details">stacjapistacjaa@gmail.com</a>, bądź zadzwoń <a href="tel:666-638-256" rel="noreferrer" className="offert__contact-details">666-638-256</a>
            </h3>

            <Img fixed={data.logo.childImageSharp.fixed}/>

            <Socials />
      
        </section>
    )
}
    


export default Offert
