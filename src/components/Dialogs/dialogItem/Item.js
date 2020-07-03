import React from 'react'
import d from "./../dialogs.module.css"
import { NavLink } from 'react-router-dom'

const Item = (props) => {
    return (
        <div className={d.item}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink> 
        </div>
    )
}

export default Item
