import React from 'react'
import './BlogPost.scss'

import postMiniature from '../../images/blog.jpg'
import arrow from '../../images/arrow-right.svg'

const BlogPost = (props) => { 
    return(
        <div className="blog-post-card">
            <img className="blog-post-card__image" src={postMiniature} alt="blog_pic"/>
            <h1 className="blog-post-card__title">{props.title}</h1>
            <p className="blog-post-card__desc">{props.description}</p>
            <img src={arrow} alt="read-more" className="blog-post-card__read-more"/>
        </div>
    )
}

export default BlogPost
