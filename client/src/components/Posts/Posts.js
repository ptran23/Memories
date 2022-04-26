import React from 'react';
import Post from './Post/Post';
import useStyles from './styles';
import {useSelector} from 'react-redux';
const Posts = () => {
    const posts = useSelector((state)=>state.posts); // post from reducers/index.js
    const classes = useStyles();
    
    console.log(posts);
    return (
        <>
            <h1>Post</h1>
            <Post />
            <Post />
        </>
    );
}

export default Posts;