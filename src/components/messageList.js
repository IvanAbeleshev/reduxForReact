import React from "react";
import { Post } from "./post";
import { connect } from 'react-redux';

const MessageList = ({posts}) =>{
    if(posts.length!==0){
        return(
            <div className="container card">
                {posts.map(element => 
                    <Post post = {element.data} key={element.id} />
                )}
            </div>
        );
    };
    return (
        <>
        <h3>POSTS:</h3>
        <div className="container card">
            <h4>We dont have any posts</h4>
        </div>
        </>
    );
}

const mapStateToProps = (state) =>{
    return {posts: state.posts.posts};
}

export default connect(mapStateToProps, null)(MessageList);