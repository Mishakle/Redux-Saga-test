import { connect } from 'react-redux';
import Post from "./Post";

const Posts = ({ syncPosts }) => {
    if (!syncPosts.length) {
        return <p className='text-center'>No posts right now</p>
    }
    return syncPosts.map(post => <Post title={post.title} id={post.id} />)
}

const mapStateToProps = state => ({
    syncPosts: state.posts.posts
})

export default connect(mapStateToProps, null)(Posts);