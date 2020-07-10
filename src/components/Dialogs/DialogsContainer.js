import React from 'react'
import { NewMessageActionCreator, updateNewMessageActionCreator } from "../redux/reducers/dialogs"
import Dialogs from './Dialogs'

const DialogsContainer = (props) => {
    const state = props.store.getState().dialogsPage;

    const addPost = () => {
        props.store.dispatch(NewMessageActionCreator())
    }

    const onPostChange = (text) => {
        props.store.dispatch(updateNewMessageActionCreator(text))
    }


    return (
        <Dialogs 
        updateNewMessage={onPostChange} 
        newMessage={addPost}
        dialogsPage = {state}
        />
    )
}

export default DialogsContainer