import React from 'react'
import ProfileInfo from './ProfileInfo';
import MyPostContainer from './MyPosts/myPostContainer';

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />

            <MyPostContainer  />
        </div>
    )
}


export default Profile;