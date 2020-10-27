import React from 'react'
import BlogPost from '../BlogPost/BlogPost'
import './LastBlogPosts.scss'

const LastBlogPosts = () => (
  <section className="blog__posts-container">
      <BlogPost id="1" title="Lorem ipsum dolor sit amet" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis ex et diam tincidunt ullamcorper. Duis vitae augue felis. Phasellus placerat faucibus congue. Etiam sollicitudin a lacus sed efficitur. Maecenas mauris nunc, blandit a mi id"/>
      <BlogPost id="2" title="Consectetur adipiscing elit" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis ex et diam tincidunt ullamcorper. Duis vitae augue felis. Phasellus placerat faucibus congue. Etiam sollicitudin a lacus sed efficitur. Maecenas mauris nunc, blandit a mi id"/>
      <BlogPost id="3" title="Sed lobortis ex et diam tincidunt ullamcorper" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis ex et diam tincidunt ullamcorper. Duis vitae augue felis. Phasellus placerat faucibus congue. Etiam sollicitudin a lacus sed efficitur. Maecenas mauris nunc, blandit a mi id"/>
  </section>
)

export default LastBlogPosts