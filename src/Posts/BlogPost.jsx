import { useParams, Link } from "react-router-dom"
import { posts } from "./PostsData.jsx"
import './blog.css'
export default function BlogPost() {

    const { slug } = useParams();
    const post = posts.find((p) => p.slug == slug)

    return (
        <div className="blog-post">
            <div className="blog-img">
                <img src={post.img} />
            </div>
            <h1>{post.title}</h1>
            {post.description}
        </div>
    )
}