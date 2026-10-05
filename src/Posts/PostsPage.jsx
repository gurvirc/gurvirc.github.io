import React from 'react'
import { Link } from 'react-router-dom'
import { posts } from './PostsData.jsx'

export default function Posts() {

    function getText(node) {
        if (typeof node === 'string' || typeof node === 'number') return String(node)
        if (Array.isArray(node)) return node.map(getText).join(' ')
        if (node?.props?.children) return getText(node.props.children)
        return ''
    }


    function truncateWords(text, limit = 40) {
        const words = text.trim().split(/\s+/)
        if (words.length <= limit) return text
        return words.slice(0, limit).join(' ') + '...'

    }

    const postList = posts.map((post, index) => (
        <Link to={`posts/${post.slug}`} key={index} className='post-card'>
            <div className='img-wrapper'>
                <img src={post.img} />
            </div>
            <h1>{post.title}</h1>
            <p>{truncateWords(getText(post.description))}</p>
        </Link>
    ))
    return (
        <div>
            <h1 className="contact-header">Posts</h1>


            <div className="posts">
                {postList}
            </div>



        </div>
    )
}