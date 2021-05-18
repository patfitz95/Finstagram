import React from 'react';
import SignInBtn from '../../components/signin-btn';
import { CreatePost, NavBar } from '../../containers';
import './style.css'

export default function Home() {
    return (
        <div className = "home">
            <NavBar />
            <CreatePost />
        </div>
    )
}