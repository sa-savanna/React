const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
        {
            id: 1,
            followed: false,
            fullName: "Dmitry",
            status: "I am a boss",
            location: { city: "Minsk", country: "Belarus" },
            photoUrl: 'https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png'
        },
        {
            id: 2,
            followed: true,
            fullName: "Ivan",
            status: "Slava to Ukraine",
            location: { city: "Kyiv", country: "Ukraine" },
            photoUrl: 'https://www.clipartmax.com/png/middle/319-3191274_male-avatar-admin-profile.png'
        },
        {
            id: 3,
            followed: false,
            fullName: "Christine",
            status: "L'union fait la force",
            location: { city: "Brussels", country: "Belgium" },
            photoUrl: 'https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png'
        },
    ],
    newPostText: 'web development'
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:

            return {
                ...state,
                // users: [...state.users]
                // та же запись, что и выше
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }


        case UNFOLLOW:
            return {
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }

        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]//взять предыдущих юзеров и затереть новыми из action
            }
        default: return state;
    }

}
export const followAC = (userId) => ({ type: FOLLOW, userId }) //return {type: ADD_POST }
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer
