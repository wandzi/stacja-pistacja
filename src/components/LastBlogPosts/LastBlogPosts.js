import React, { useEffect, useState } from 'react'
import BlogPost from '../BlogPost/BlogPost'
import client from '../../client'
import './LastBlogPosts.scss'

const LastBlogPosts = () => {
  const [data, setData ] = useState(null);

  useEffect(() => {
    client.getEntries()
    .then((response) => {
      setData(response.items);
    })
    .catch(console.error)
  }, [])

  return (
    <section className="blog__posts-container">
      { 
        data && data.slice(0, 3).map(item => (
          <BlogPost 
            id={item.fields.createdAt} 
            image={item.fields.postImage.fields.file.url} 
            title={item.fields.postTitle} 
            description={item.fields.postShortDescription}
          />
        ))
      }
    </section>
  )
}


export default LastBlogPosts