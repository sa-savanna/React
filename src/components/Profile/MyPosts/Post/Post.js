import React from 'react'
import post from "./Post.module.css"

const Post = (props) => {
    return (
        <div className={post.post}>
            <div className={post.item}>
                <h3>{props.message}</h3>
                <img src="https://fr.web.img4.acsta.net/newsv7/20/03/17/10/18/5471953.jpg" alt="ava" />
                <span>Likes: {props.likes}</span>
            </div>

        </div>
    )
}

export default Post;