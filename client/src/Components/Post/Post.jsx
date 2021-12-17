import React, {useState, useEffect} from 'react'
import styles from './styles/post.module.scss'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import { Avatar } from '@mui/material';

import CommentForm from '../Comment/CommentForm'
import CommentItem from '../Comment/CommentItem'

import { addComment } from '../../features/posts/postsSlice'
import { useSelector, useDispatch } from "react-redux"

import PostStats from './PostStats'

const Post = ({ postdata }) => {
    const [showCommentSection, setShowCommentSection] = useState(false);
    const posts = useSelector(state => state.posts.posts)
    const auth = useSelector(state => state.auth.isAuthenticated)
    const dispatch = useDispatch();

    const handleShowCommentForm = () => {
        setShowCommentSection(!showCommentSection);
    }

    return (
        <React.Fragment>
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

                    <div className={styles.body}>
                        <p> { postdata.postMessage.body } </p>
                    </div>

                    <div className={styles.stats}>

                        <div className={styles.user}>
                            <Avatar src={ postdata.owner.image } />
                            <p> { postdata.owner.name } </p>
                        </div>

                        <PostStats handleShowCommentForm={handleShowCommentForm} icon={<MessageIcon color="warning" />} label={`${ postdata.comments.length } Comments`} />
                        <PostStats icon={<ShareIcon color="secondary" />} label="Share" />
                        <PostStats icon={<BookmarkAddIcon />} label="Save" />
                        
                    </div>
                </div>
            </div>

            { showCommentSection && <div className={styles.commentSection} >
                { auth && <CommentForm user={postdata.owner} dispatch={dispatch} addComment={addComment} cta="Comment" postId={postdata.id} /> }
                { !auth && <CommentForm dispatch={dispatch} addComment={addComment} cta="Login to Comment" postId={postdata.id} /> }

                { postdata.comments.length > 0 && postdata.comments.map(comment => <CommentItem user={postdata.owner} commentData={comment} />)}
                
            </div> }

        </ React.Fragment>
    )
}

export default Post
