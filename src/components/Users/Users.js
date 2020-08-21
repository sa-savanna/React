import React from 'react'
import style from './users.module.css'


const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 4,
                followed: false,
                fullName: "Dmitry",
                status: "I am a boss",
                location: { city: "Minsk", country: "Belarus" },
                photoUrl: 'https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png'
            },
            {
                id: 5,
                followed: true,
                fullName: "Ivan",
                status: "Slava to Ukraine",
                location: { city: "Kyiv", country: "Ukraine" },
                photoUrl: 'https://www.clipartmax.com/png/middle/319-3191274_male-avatar-admin-profile.png'
            },
            {
                id: 6,
                followed: false,
                fullName: "Christine",
                status: "L'union fait la force",
                location: { city: "Brussels", country: "Belgium" },
                photoUrl: 'https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png'
            },
        ])
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div><img className={style.userPhoto} src={u.photoUrl} alt="" /></div>
                        <div>
                            {u.followed ?
                                <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                                :
                                <button onClick={() => { props.follow(u.id) }}>Follow</button>}

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>
                )
            }
        </div>
    )
}

export default Users
