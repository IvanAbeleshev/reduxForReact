import { ADD_NEW_POST } from "./reduxTypes";

const initial = {
    posts:[]
}

export const postReducer = (state = initial, action) =>{
    switch(action.type){
        default: 
            return state;
        case ADD_NEW_POST:
            //add new item into array
            return {...state, posts: [...state.posts. action.payload]};
    }
}