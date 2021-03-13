import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions";
import Loader from "./Loader";
import Post from "./Post";

const FetchedPosts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.fetchedposts);
    const loading = useSelector(state => state.app.loading);
    const onClickBtn = () => {
        return dispatch(fetchPosts());
    }

    if (loading) {
        return <Loader />
    }
    // debugger;
    if (!posts.length) {
        return <button className='btn btn-primary' onClick={onClickBtn}>Load</button>
    }
    return posts.map(post => <Post title={post.title} key={post.id} />)
}

export default FetchedPosts;