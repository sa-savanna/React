import profile from "./reducers/profile"
import dialogs from "./reducers/dialogs"
import sidebar from "./reducers/sidebar"

let store = {
    _state: {
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
            ],
            newMessageBody: ''
        },

        sideBar: {
            friends: [
                { id: 1, name: "Anna" },
                { id: 2, name: "Sasha" }
            ]

        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log("State has changed");
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) { //type: "ADD_POST"
        this._state.profilePage = profile(this._state.profilePage, action)
        this._state.dialogsPage = dialogs(this._state.dialogsPage, action)
        this._state.sideBar = sidebar(this._state.sideBar, action)
        this._callSubscriber(this._state)
    }
}

export default store;

window.store = store;