import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutMe from '../components/AboutMe/AboutMe'

const AboutMeSite = () => {
  return (
    <Layout>
      <SEO title="O mnie" />
      <AboutMe />
    </Layout>
  ) 
}

export default AboutMeSite