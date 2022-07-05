import { ADD_NEW_POST } from "./reduxTypes"

export const addPost = (post) =>{
    console.log('this is action:', post);
    return {
        type: ADD_NEW_POST,
        payload: post
    }
}