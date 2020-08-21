import React from 'react'
import { addPostActionCreator, updateNewPostActionCreator } from "../../redux/reducers/profile"
import MyPosts from './MyPosts'
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostActionCreator: (text) => { dispatch(updateNewPostActionCreator(text)) },
        addPost: () => { dispatch(addPostActionCreator()) }
    }

}
const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostContainer;