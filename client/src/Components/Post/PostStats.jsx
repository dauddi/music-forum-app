import React from 'react'
import styles from './styles/poststats.module.scss'

const PostStats = ({icon, label, handleShowCommentForm}) => {
    return (
        <div onClick={ handleShowCommentForm } className={styles.container}>
            { icon }
            <p>{ label }</p>
        </div>
    )
}

export default PostStats
