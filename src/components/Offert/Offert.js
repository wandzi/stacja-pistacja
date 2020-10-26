import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

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
                Napisz do mnie na stacjapistacjaa@gmail.com bądź zadzwoń 666-638-256
            </h3>
        </section>
    )
}
    


export default Offert
