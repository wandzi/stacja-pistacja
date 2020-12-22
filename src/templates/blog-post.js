import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import "./blog-post.scss"
/*export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "Do MMMM, YYYY")
      featuredImage {
        fluid(maxWidth: 750) {
          ...GatsbyContentfulFluid
        }
      }
      postDescription {
        childMarkdownRemark {
            excerpt
          }
      }
    }
  }
`*/

const BlogPost = props => {
  return (
    <Layout>
      <SEO title={props.data.contentfulBlogPost.title} />
      <div className="content">
        {props.data.contentfulBlogPost.featuredImage && (
          <Img
            className="featured"
            fluid={props.data.contentfulBlogPost.featuredImage.fluid}
            alt={props.data.contentfulBlogPost.title}
            style={{ margin: '1rem', height: '400px' }}
            imgStyle={{ objectFit: 'contain' }}
          />
        )}

        <h1 className="content__title">{props.data.contentfulBlogPost.title}</h1>
        <span className="meta">
          Napisano {props.data.contentfulBlogPost.publishedDate}
        </span>     

        <p className="content__description">
            {props.data.contentfulBlogPost.postDescription.childMarkdownRemark.excerpt}
        </p>
      </div>
    </Layout>
  )
}

export default BlogPost