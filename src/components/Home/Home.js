import BlogList from "../BlogList/BlogList";
import useFetch from "../useFetch/useFetch";
import './loading.css'

const Home = () => {
    const { data, isPending, error } = useFetch('http://localhost:8000/blogs/')

return (
    <div className='home'>
        {error && <div className='error'>{ error }</div>}
        {isPending && <div className='loading-ring'>Loading...<span></span></div>}
        {data && <BlogList blogs={data} title='All Reviews!'/>}
    </div>
)
}

export default Home