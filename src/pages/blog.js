import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import BlogPage from '../components/BlogPage/BlogPage'

const Blog = () => (
  <Layout>
    <Helmet title="Blog | Wiecznie w formie!" defer={false} />
    <BlogPage />
</Layout>
)

export default Blog
