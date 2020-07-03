import React from 'react'
import d from "./dialogs.module.css"
import Item from './dialogItem/Item'
import Message from './Message/Message'


const Dialogs = (props) => {

    let dialogElements = props.state.dialogs.map(dialog => <Item name={dialog.name} id={dialog.id} />)
    let messagesElements = props.state.messages.map(message => <Message message={message.message} />)

       
    return (
        <div className={d.dialogs}>
            <div className={d.dialogs_item}>
                {dialogElements}

            </div>
            <div class={d.messages}>
                {messagesElements}
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default Dialogs