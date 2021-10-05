import React from 'react'
import './Style/Blog.css'

export const Blog = (props) => {
    return (
        <div className="blog-wrap">
            <img src="https://placeimg.com/640/480/tech" alt="THis is image" />
            <p>Tanggal : {props.tanggal}</p>
            <p>Judul : {props.judul}</p>
            <p>Description : {props.description}</p>
        </div>
    )
}
export default Blog;