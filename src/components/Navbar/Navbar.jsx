import React from "react";
import { NavLink } from "react-router-dom";
import s from './Navbar.module.css'

const Navbar = (props) => {

    return (
        <div className="navbar">
            <div>
                <NavLink to="/profile">My profile</NavLink>
            </div>
            <div>
                <NavLink to="/chat">Chat</NavLink>
            </div>
            <div>
                <NavLink to="/posts">Posts</NavLink>
            </div>
            <div>
                <NavLink to="/about">About</NavLink>
            </div>
        </div>
    )
}

export default Navbar