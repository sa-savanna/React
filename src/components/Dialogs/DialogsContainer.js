import React from 'react';
import { NewMessageActionCreator, updateNewMessageActionCreator } from "../redux/reducers/dialogs";
import Dialogs from './Dialogs';
import { connect } from 'react-redux';



const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessage: (text) => {dispatch(updateNewMessageActionCreator(text))},
        newMessage: () => { dispatch(NewMessageActionCreator()) }
    }

}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
//----контейнерная компонента -----------------------------------презентационная к.




export default DialogsContainer