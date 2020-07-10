import React from 'react'
import { updateNewPostActionCreator, addPostActionCreator } from "../../redux/reducers/profile"
import MyPosts from './MyPosts'


const MyPostContainer = (props) => {
    
    const state = props.store.getState()
    const addPost = () => {
        props.store.dispatch(addPostActionCreator()) //через props мы прокинули метод dispatch и вызвали фнкцию, которая вызывает action, у которой есть св-во type
    }

    const onPostChange = (text) => {
        const action = updateNewPostActionCreator(text)
        props.store.dispatch(action)
    }

    return (
        <MyPosts
            updateNewPostActionCreator={onPostChange}
            addPost={addPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
        />

    )
}



export default MyPostContainer;