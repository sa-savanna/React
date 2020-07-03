import {renderAll} from '../../renderAll'

let state = {
    profilePage: {
        posts: [
            { id: 1, message: "What are you doing?", likesCount: 12 },
            { id: 2, message: "Nothing", likesCount: 5 }
        ],
        newPostText: 'web development'
    },

    dialogsPage: {
        messages: [
            { id: 1, message: "Hi" },
            { id: 2, message: "Yo" }
        ],
        dialogs: [
            { id: 1, name: "Anna" },
            { id: 2, name: "Sasha" }
        ]
    },

    sideBar: {
        friends: [
            { id: 1, name: "Anna" },
            { id: 2, name: "Sasha" }
        ]

    }
}


export const addPost = () => {
    const newPost = {
        id: 5, message: state.profilePage.newPostText,
        likesCount: 0
    }
    
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ""
    renderAll(state)
}


export const updateNewpostText = (newText) => {
        
    state.profilePage.newPostText = newText;
    renderAll(state)
}


export default state;