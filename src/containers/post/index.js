import React from 'react';
import "./style.css";
import {Comment} from "../../components"
import { db, storage } from '../../firebase';
import CommentInput from '../../components/comment-input';

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

                // get ref to the image file we would like to delete
                let imageRef = storage.refFromURL(photoUrl)

                // delete the file
                imageRef.delete()
                .then(function(){
                    console.log("delete successful");
                })
                .catch(function (error) {
                    console.log(`Error ${error}`)
                });
                //delete the post info from firebase firestore
                db.collection("posts").doc(id).delete()
                .then(function(){
                    console.log("delete successful");
                })
                .catch(function (error) {
                    console.log(`Error ${error}`)
                });
            }

    return (
        <div className= "post">
            <div className="post_header">
                <div className="post_headerLeft">
                <img className="post_profilePic" src={profileUrl}/>
                <p style={{ marginLeft: "8px"}}>{username}</p>
                </div>
                <button onClick={deletePost} className="post_delete">Delete</button>
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
            <CommentInput comments={comments} id={id}/>
        </div>
    )
}