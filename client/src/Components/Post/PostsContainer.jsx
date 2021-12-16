import React, {useState, useEffect} from 'react'
import Tabs from './Tabs'
import PostsList from './PostsList'
import AddPostForm from './AddPostForm'
import styles from './styles/postscontainer.module.scss'
import { Button } from '@mui/material'

const PostsContainer = ({ auth }) => {
    const [isAuth, setIsAuth] = useState(false)
    const [showAddPostForm, setShowAddPostForm] = useState(false)

    useEffect(() => {
        setIsAuth(auth)
    }, [auth])

    const handlePost = () => {
        setShowAddPostForm(!showAddPostForm)
    }

    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                Sidebar
            </div>
            <div className={styles.main}>
                <div className={styles.header}>
                    <h1>Top Posts</h1>
                    { !showAddPostForm && <Button variant='contained' onClick={ handlePost } disabled={!isAuth}>Post to Forum</Button>}                    
                    { showAddPostForm && <Button variant='contained' onClick={ handlePost } disabled={!isAuth}>Close Form</Button>}
                </div>

                <AddPostForm show={showAddPostForm} />
               
                <Tabs auth={isAuth} />

                <hr style={{color: 'white'}} />
                
                <PostsList />
            </div>

            <div className={styles.sidebar}>
                Right Sidabar
            </div>

        </div>
    )
}

export default PostsContainer
