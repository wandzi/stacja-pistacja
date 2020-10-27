import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import './Header.scss'

const Header = () => (
  <header className="header">
    <div className="header__movie-coming-soon">FILM</div>
    <nav className="header__nav">
      <Link to="/" className="header__nav-link">Strona Główna</Link>
      <Link to="/" className="header__nav-link">Kontakt</Link>
      <Link to="/o-mnie" className="header__nav-link">O mnie</Link>
      <Link to="/blog" className="header__nav-link">Blog</Link>
      <Link to="/" className="header__nav-link">Sklep</Link>
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
