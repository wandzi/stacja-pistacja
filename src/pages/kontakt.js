import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactUs from '../components/ContactUs/ContactUs'

const ContactSite = () => {
  return (
    <Layout>
      <SEO title="O mnie" />
      <ContactUs />
    </Layout>
  ) 
}

export default ContactSite