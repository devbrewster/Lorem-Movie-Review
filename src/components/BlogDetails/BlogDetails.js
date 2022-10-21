import {useNavigate, useParams} from "react-router-dom";
import useFetch from "../useFetch/useFetch";

const fetchUrl = 'http://localhost:8000/blogs/'

const BlogDetails = () => {
    const {id} = useParams()
    const {data: blog, error, isPending} = useFetch(fetchUrl + id)
    const navigate = useNavigate();

    const handleDelete = () => {
        fetch(fetchUrl + blog.id, {
            method: 'DELETE'
        })
            .then(() => {
                navigate('/')   //
            })
    }

    return (
        <div className='blog-details'>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <div>
                        {blog.body}
                        {blog.author}
                    </div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
    )
}

export default BlogDetails