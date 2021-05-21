import React, { useContext, useState } from 'react';
import { SignInBtn } from '../../components';
import { UserContext } from '../../context/user';
import "./style.css";

export default function NavBar() {

    const [user, setUser] = useContext(UserContext).user;

    return (
        <div className = "navbar">
            <p>Finstagram</p>

            {user ? <img className="navbar_img" src={user.photoURL}/> : <SignInBtn />}
        </div>
    )
}