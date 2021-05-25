import React, {useContext, useState} from "react";
import { UserContext } from "../../context/user";
import { db } from "../../firebase";
import "./style.css"

export default function CommentInput({comments, id, user}) {

    const [user, setUser] = useContext(UserContext).user;

    const [comment, setComment] = useState("");
    const [commentMap, setCommentMap] = useState(comments ? comments : []);

    const addComment = () =>{
        // add comment to the Post info
        if(comment != ""){

        commentMap.push({
            comment: comment,
            username: user.displayName
        });

        db.collection("posts")
        .doc(id)
        .update({
            comments: commentMap
        }).then(function() {
            setComment('');
            console.log("comment added")
        }).catch(function(error){
            console.log(`Error ${error}`)
        })
    }
}
    return (
        <div className="commentInput">
            <textarea
            className="commentInput_textarea"
            rows="1"
            placeholder="write a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}></textarea>
            <button onClick={addComment} className="commentInput_btn">Post</button>
        </div>
    )
}