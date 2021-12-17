import React, {useState} from 'react'
import styles from './styles/commentitem.module.scss'
import { Avatar } from '@mui/material';
import moment from 'moment';


const CommentItem = ({ user, commentData }) => {

    return (
        <div className={styles.container} >
            <div className={styles.header} >
                <Avatar fontSize="inherit" src={user.image} />
                <small> {user.name} </small>
                <small> Posted at: {commentData.createdAt} </small>
            </div>

            <div className={styles.commentBody}>
                <p> {commentData.commentBody} </p>
            </div>

            <div className={styles.commentActions}>

            </div>
        </div>
    )
}

export default CommentItem
