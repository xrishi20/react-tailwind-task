import React from 'react'

const Blog = ({title, author, imageSrc, alt}) => {
    return (
      <button className="blog">
        {/* Info */}
        <div>
          <h3>{title}</h3>
          <h6>{author}</h6>
        </div>
        {/* Image */}
        <img
          src={imageSrc}
          alt={alt}
        />
      </button>
    )
}

export default Blog
