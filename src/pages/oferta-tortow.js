import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BirthdayCakes from '../components/BirthdayCakes/BirthdayCakes'

const BirthdayCakesOffert = () => {
  return (
    <Layout>
      <SEO title="Oferta tortów" />
      <BirthdayCakes />
    </Layout>
  ) 
}

export default BirthdayCakesOffert