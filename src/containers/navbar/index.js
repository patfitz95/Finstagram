import React from 'react';
import { SignInBtn } from '../../components';
import "./style.css"

export default function NavBar() {
    return (
        <div className = "navbar">
            <p>Finstagram</p>

            <SignInBtn />

        </div>
    )
}