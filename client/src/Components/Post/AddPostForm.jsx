import React, {useState, useEffect} from 'react'
import styles from './styles/addpostform.module.scss'
import { Button } from '@mui/material';

import moment from 'moment';

import { createNewPost } from '../../features/posts/postsSlice';
import { useSelector, useDispatch } from 'react-redux';

const AddPostForm = ({ show, setShowAddPostForm }) => {
    const [topicInput, setTopicInput] = useState("")
    const [bodyInput, setBodyInput] = useState("")
    const posts = useSelector(state => state.posts.posts)
    const dispatch = useDispatch();

    const handlePost = (event) => {
        event.preventDefault();

        const newPost = {
            id: posts.length + 1,
            category: "Afropop",
            postMessage: {
              topic: topicInput,
              body: bodyInput,
            },
            creationDate: moment().startOf('minute').fromNow(),
            owner: {
              id: 987,
              name: "Ashley Janelle",
              image: "https://avatars.githubusercontent.com/u/3905913?v=4",
            },
            comments: [],
            votes: {
              upvotes: 0,
              downvotes: 0,
            },
        }
        dispatch(createNewPost(newPost));
        setTopicInput("");
        setBodyInput("");
      setShowAddPostForm(!show)
    }

    const handleCancel = () => {
      setTopicInput("");
      setBodyInput("");
      setShowAddPostForm(!show)
      
    }

    return (
        show && <div className={styles.container}>
            <label htmlFor="topic">Topic</label>
            <input id="topic" type="text" name="topic" value={topicInput} onChange={event => setTopicInput(event.target.value)} required />

            <label htmlFor="body">Body</label>
            <textarea id="body" type="text" name="body" cols="58" rows="5" value={bodyInput} onChange={event => setBodyInput(event.target.value)} required />

            <div className={styles.btns}>
              <Button variant="outlined" color="warning" type="submit" onClick={ handleCancel } >Cancel</Button>
              <Button variant="contained" color="warning" type="submit" onClick={ handlePost } >Post</Button>
            </div>
        </div>
    )
}

export default AddPostForm
