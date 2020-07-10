import React from 'react'
import ProfileInfo from './ProfileInfo';
import MyPostContainer from './MyPosts/myPostContainer';

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />

            <MyPostContainer store={props.store} />
        </div>
    )
}


export default Profile;