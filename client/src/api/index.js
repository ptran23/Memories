import axios from 'axios'; //using Axios to call api

const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);