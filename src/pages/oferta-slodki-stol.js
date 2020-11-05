import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SweetTables from '../components/SweetTables/SweetTables'

const TablesOffert = () => {
  return (
    <Layout>
      <SEO title="Oferta słodkich stołów" />
      <SweetTables/>
    </Layout>
  ) 
}

export default TablesOffert