import { ADD_NEW_POST } from "./reduxTypes"

export const addPost = (post) =>{
    return {
        type: ADD_NEW_POST,
        payload: post
    }
}