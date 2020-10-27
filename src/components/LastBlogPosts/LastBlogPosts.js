import React from 'react'
import BlogPost from '../BlogPost/BlogPost'
import './LastBlogPosts.scss'

const LastBlogPosts = () => (
  <section className="blog__posts-container">
      <BlogPost title="Lorem ipsum dolor sit amet" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis ex et diam tincidunt ullamcorper. Duis vitae augue felis. Phasellus placerat faucibus congue. Etiam sollicitudin a lacus sed efficitur. Maecenas mauris nunc, blandit a mi id"/>
      <BlogPost title="Consectetur adipiscing elit" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis ex et diam tincidunt ullamcorper. Duis vitae augue felis. Phasellus placerat faucibus congue. Etiam sollicitudin a lacus sed efficitur. Maecenas mauris nunc, blandit a mi id"/>
      <BlogPost title="Sed lobortis ex et diam tincidunt ullamcorper" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis ex et diam tincidunt ullamcorper. Duis vitae augue felis. Phasellus placerat faucibus congue. Etiam sollicitudin a lacus sed efficitur. Maecenas mauris nunc, blandit a mi id"/>
  </section>
)

export default LastBlogPosts
