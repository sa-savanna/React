import React from 'react'
import MyPosts from "./MyPosts/MyPosts"
import ProfileInfo from './ProfileInfo';

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
                        
            <MyPosts 
            posts={props.profilePage.posts} 
            newPostText={props.profilePage.newPostText} 
            updateNewpostText={props.updateNewpostText}
            addPost={props.addPost}/>
        </div>
    )
}


export default Profile;