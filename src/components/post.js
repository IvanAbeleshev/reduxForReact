import React from "react";

export const Post = (props) =>{
    return(
    <div className="card-body">
        {props.post}
    </div>
    );
}