import React, { useContext, useState } from 'react'
import { SignInBtn } from '../../components'
import { UserContext } from '../../context/user'
import './style.css'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

export default function CreatePost() {

const [user, setUser] = useContext(UserContext).user;
const [caption, setCaption] = useState("");
const handleChange = () => {}
const handleUpload = () => {

}

    return (
        <div className= "createPost">
            {user ? (<div className="createPost_loggedIn">
                <p>Create a Post</p>
                <div className="createPost_loggedInCenter">
                    <textarea className="createPost_textarea"
                     rows="3" 
                     value={caption}
                     onChange={(e) => setCaption(e.target.value)}>

                    </textarea>
                </div>
                <div className="createPost_imageUpload">
                    <label htmlFor="fileInput">
                    <AddAPhotoIcon style={{cursor:"pointer", fontSize: "20px"}}/>
                    </label>
                    <input id="fileInput" type="file" accept="image/*" onChange={handleChange}/>
                </div>
                <button className="createPost_uploadBtn" 
                onClick={handleUpload} style={{color: caption ? "#000" : "lightgrey"}}>
                    Upload</button>
                </div>) : ( <div>
                <SignInBtn/>
                <p style={{marginLeft: "12px"}}>to Post & Comment</p>
                </div>)}
        </div>
    )
}