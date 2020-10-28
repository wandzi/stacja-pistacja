import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AddresNotFound from '../components/AddressNotFound/AddressNotFound'

const NotFoundPage = () => (
  <Layout>
    <SEO title="Nie ma takiej strony" />
    <AddresNotFound />
  </Layout>
)

export default NotFoundPage
