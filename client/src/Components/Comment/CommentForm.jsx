import React, {useState, useEffect} from 'react'
import styles from './styles/commentform.module.scss'
import { Avatar, Button } from '@mui/material';
import moment from 'moment';

const CommentForm = ({ user, postId, dispatch, addComment, cta }) => {
    const [commentInput, setCommentInput] = useState("")

    const handleCommentSubmit = (event) => {
        event.preventDefault();

        const newComment = {
            userId: user.id,
            commentBody: commentInput,
            postId: postId,
            createdAt: moment().startOf("hour").fromNow(),
        }

        dispatch(addComment(newComment))
        setCommentInput("")
    }

    return (
        <div className={styles.container} >
            <Avatar src={user?.image} />
            <input type="text" placeholder="comment here" name="comment" onChange={(e) => setCommentInput(e.target.value)} value={commentInput}  />
            <Button variant="contained" color="primary" type="submit" onClick={handleCommentSubmit}> {cta} </Button>
        </div>
    )
}

export default CommentForm
