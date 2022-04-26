import * as api from '../api'; // importing all from actions as api 

//Action Creators - functions that return functions

export const getPosts = () => async (dispatch) =>{ //redux-thunk allows an additonal arrow function to fetch all the post

    try {
        const {data} = await api.fetchPosts(); 
        dispatch({type: 'FETCH_ALL', payload:data});
    }catch (error){
        console.log(error.message);
    }
}

export const createPost = (post) => async(dispatch) => {
    try{
        const {data} = await api.createPost(post);
        dispatch({type: 'CREATE', payload: data});

    } catch (error) {
        console.log(error.message);
    }

}