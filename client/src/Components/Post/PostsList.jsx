import React, {useState, useEffect} from 'react'
import Post from './Post'
import styles from './styles/postslist.module.scss'

import { useSelector, useDispatch } from 'react-redux'

const PostsList = () => {
    const [posts, setPosts] = useState([])
    const postsData = useSelector(state => state.posts)

    useEffect(() =>{
        const { posts } = postsData;

        setPosts([...posts])
    }, [postsData])

    console.log(posts);

    return (
        <div className={styles.container}>

            { posts.map(post => <Post key={post.id} postdata={post} />) }
            
        </div>
    )
}

export default PostsList
