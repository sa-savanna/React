const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

let initialState = {
    posts: [
        { id: 1, message: "What are you doing?", likesCount: 12 },
        { id: 2, message: "Nothing", likesCount: 5 }
    ],
    newPostText: 'web development'
}


const profile = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }

            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            }


        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }


        default: return state;
    }

}
export const addPostActionCreator = () => ({ type: ADD_POST }) //return {type: ADD_POST }

export const updateNewPostActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

export default profile
