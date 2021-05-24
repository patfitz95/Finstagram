import React from 'react';
import "./style.css";
import {Comment} from "../../components"

export default function Post({
    profileUrl,
     username,
      id,
       photoUrl,
        caption,
         comments,
        }) {

            const deletePost = () => {
                //delete image from firebase storage
            }

    return (
        <div className= "post">
            <div className="post_header">
                <div className="post_headerLeft">
                <img className="post_profilePic" src={profileUrl}/>
                <p style={{ marginLeft: "8px"}}>{username}</p>
                </div>
                <button className="post_delete">Delete</button>
            </div>
            <div className="post_center">
                <img className="post_photoUrl" src={photoUrl} />
            </div>

            <div>
                <p>
                    <span style={{fontWeight: "500", marginRight: "4px"}}>{username}</span>
                    {caption}
                    </p>
            </div>
            {comments ? comments.map((comment) => 
            <Comment username={comment.username} caption={comment.comment} />) : <></>}
        </div>
    )
}