import React from 'react'
import s from "./Profile.module.css"


const ProfileInfo = () => {
    return (
        <div>
            <div className={s.card}>
                <img src="https://assets.kpmg/content/dam/kpmg/au/images/2020/space-milky-way.jpg/jcr:content/renditions/cq5dam.web.1400.350.jpg" alt="space" />
            </div>
            <div className={s.description}>
                ava+desc
            </div>
        </div>
    )
}


export default ProfileInfo