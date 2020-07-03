import React from 'react'
import nav from "./nav.module.css";
import {NavLink} from "react-router-dom"

const NavBar = () => {
    return (

        <nav className={nav.nav}>
            <div className={nav.item}>
                <NavLink to="/profile" activeClassName={nav.active} > Profile</NavLink>
            </div>
            <div className={nav.item}>
                <NavLink to="/dialogs" activeClassName={nav.active}> Dialogs</NavLink>
            </div>
            <div className={nav.item}>
                <NavLink to="/news" activeClassName={nav.active}> News</NavLink>
            </div>
            <div className={nav.item}>
                <NavLink to="/music" activeClassName={nav.active}> Music</NavLink>
            </div>
            <div className={nav.item}>
                <NavLink to="/settings"activeClassName={nav.active}> Settings</NavLink>
            </div>
            <div>
                <h1>Friends online</h1>
                
            </div>
        </nav>

    )
}

export default NavBar;