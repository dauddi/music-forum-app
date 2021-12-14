import React from 'react'
import Tabs from './Tabs'
import PostsList from './PostsList'
import styles from './styles/postscontainer.module.scss'
import { Button } from '@mui/material'

const PostsContainer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                Sidebar
            </div>
            <div className={styles.main}>
                <div className={styles.header}>
                    <h1>Top Posts</h1>
                    <Button variant='contained' >Login to Post</Button>
                </div>
               
                <Tabs />

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
