import React from "react"
import logo from '../../images/logo.jpg'
import './AddressNotFound.scss'

const NotFoundPage = () => (
    <section className="page-not-found">
        <img src={logo} className="page-not-found__logo" alt="logo" />
        <h1 className="page-not-title">Whoops... Strona nieznaleziona...</h1>
    </section>
)

export default NotFoundPage
