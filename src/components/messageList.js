import React from "react";
import { Post } from "./post";

export const MessageList = ({arrayPosts}) =>{
    return(
        <div className="container">
            <h3 className="text-center">Posts</h3>
            <div className="contaainer card">
                {arrayPosts.map(element => 
                    <Post post = {element} key={element} />
                )}
            </div>
        </div>
    );
}