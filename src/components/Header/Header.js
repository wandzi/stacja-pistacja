import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import HeroImage from '../../images/table-gallery/2.jpg'
import './Header.scss'

const Header = () => (
  <header className="header">
    <div className="header__top">
      <img src={HeroImage} alt="Hero Image" className="header__top-image"/>
      <h1 className="header__top-name">Stacja Pistacja</h1>
    </div>
    <nav className="header__nav">
      <Link to="/" className="header__nav-link">Strona Główna</Link>
      <Link to="/kontakt" className="header__nav-link">Kontakt</Link>
      <Link to="/o-mnie" className="header__nav-link">O mnie</Link>
      <Link to="/blog" className="header__nav-link">Blog</Link>
      <Link to="/sklep" className="header__nav-link">Sklep</Link>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
