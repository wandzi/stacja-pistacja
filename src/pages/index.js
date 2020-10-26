import React from 'react'
import Layout from '../components/layout'
import Offert from '../components/Offert/Offert'
import LastBlogPosts from '../components/LastBlogPosts/LastBlogPosts'

const IndexPage = () => (
  <Layout>
    <Offert />
    <LastBlogPosts />
  </Layout>
)

export default IndexPage
