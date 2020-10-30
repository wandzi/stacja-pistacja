import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Cakes from '../components/Cakes/Cakes'

const CakesOffert = () => {
  return (
    <Layout>
      <SEO title="Oferta ciast i słodkości" />
      <Cakes />
    </Layout>
  ) 
}

export default CakesOffert