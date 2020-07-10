import React from 'react'
import d from "./dialogs.module.css"
import Item from './dialogItem/Item'
import Message from './Message/Message'


const Dialogs = (props) => {
    const state = props.dialogsPage;

    let dialogElements = state.dialogs.map(dialog => <Item name={dialog.name} id={dialog.id} />)
    let messagesElements = state.messages.map(message => <Message message={message.message} />)
    const newMessageBody = state.newMessageBody;


    const addPost = () => {
        props.newMessage()
    }

    const onPostChange = (e) => {
        const text = e.target.value;
        props.updateNewMessage(text)
    }


    return (
        <div className={d.dialogs}>
            <div className={d.dialogs_item}>
                {dialogElements}

            </div>
            <div className={d.messages}>
                {messagesElements}
            </div>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        cols="30" rows="10"
                        value={newMessageBody}
                        placeholder='Enter your message' />

                </div>
                <button onClick={addPost}>Add post</button>
                <button>Remove</button>

            </div>
        </div>
    )
}

export default Dialogs