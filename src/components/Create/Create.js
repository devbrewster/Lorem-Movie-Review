import {useState} from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('')
    const [isPending, setIsPending] = useState(false)
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); // prevents page from refreshing after submission
        const blog = {title, body, author}
        setIsPending(true)

        fetch('http://localhost:8000/blogs/', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("Blog created")
            setIsPending(false)
            navigate('/')
        })
    }
    return (
        <div className='create'>
            <h2>Add a new review</h2>
            <form onSubmit={handleSubmit}>
                <label>Review Title:</label>
                <input
                    type='text'
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Review Body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Review Author:</label>
                <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}>
                >
                    <option>Mario</option>
                    <option>Luigi</option>
                </select>
                {!isPending && <button>Add Review</button>}
                { isPending && <button disabled>Adding review...</button>}
            </form>
        </div>
    )
}

export default Create