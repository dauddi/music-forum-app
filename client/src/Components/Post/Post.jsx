import React from 'react'
import styles from './styles/post.module.scss'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import { Avatar } from '@mui/material';

import PostStats from './PostStats'

const Post = ({ postdata }) => {

    console.log("post rendered");

    return (
        <div className={styles.container}>
            <div className={styles.votes}>
                <ThumbUpIcon style={{fill:"white"}} fontSize="medium" />
                <p> {postdata.votes.upvotes - postdata.votes.downvotes} </p>
                <ThumbDownAltIcon style={{fill:"white"}} fontSize="medium" />
            </div>
            <div className={styles.main}>
                <div className={styles.header}>

                    <small>Posted: { postdata.creationDate } </small>
                </div>

                <div className={styles.topic}>
                    <h3> { postdata.postMessage.topic } </h3> 
                </div>

                <div className={styles.stats}>

                    <div className={styles.user}>
                        <Avatar src={ postdata.owner.image } />
                        <p> { postdata.owner.name } </p>
                    </div>

                    <PostStats icon={<MessageIcon color="warning" />} label={`${ postdata.comments.length } Comments`} />
                    <PostStats icon={<ShareIcon color="secondary" />} label="Share" />
                    <PostStats icon={<BookmarkAddIcon />} label="Save" />
                    
                </div>
            </div>
        </div>
    )
}

export default Post
