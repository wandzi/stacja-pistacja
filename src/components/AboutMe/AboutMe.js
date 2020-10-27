import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import './AboutMe.scss'

const AboutMe = () => {
    const data = useStaticQuery(graphql`
        query AboutMe {
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
    <section className="about-me">
        <h1 className="about-me__kicker">Cześć, jestem Joanna!</h1>
        <div className="about-me__description">
            <p>
                Moja przygoda z pieczeniem zaczęła się kilkanaście lat temu, gdy obserwowałam ciocię  w kuchni. 
                Na każde moje urodziny dostawałam przepiękny i smaczny tort. Jako dzieciak nie zdawałam sobie z tego sprawy, 
                że to będzie moja przyszłość!
            </p>
            <Img fixed={data.logo.childImageSharp.fixed} className="about-me__logo"/>
            <p>
                Stacja Pistacja powstała w marcu 2019 roku i od tego czasu prężnie się rozwijamy. Działamy nie tylko z małymi tortami,
                ale i weselnymi. W naszej ofercie znajdziesz również kompletną usługę słodkiego stołu na wesela, urodziny, chrzciny,
                imieniny, imprezy firmowe itp.  Samodzielnie  tworzę każdy element słodkiego stołu. Zaczynając od słodkości, doborze
                odpowiednich pater, talerzy, dekoracji kolorystycznej pod styl imprezy, a kończąc na dostawie i demontażu dnia następnego.
            </p>
            <p>
                Ceny tortów oraz słodkiego stołu są ustalane indywidualnie. 
                W zapytaniach o wycenę proszę o informację: lokalizacja, ilość osób, datę.
            </p>
        </div>
     </section>
  ) 
}

export default AboutMe