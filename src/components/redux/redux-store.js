import profile from './reducers/profile'
import dialogs from './reducers/dialogs'
import sidebar from './reducers/sidebar'
import { createStore, combineReducers } from "redux";
import usersReducer from './reducers/users';

let reducers = combineReducers({
    profilePage: profile,
    dialogsPage: dialogs,
    sideBar: sidebar,
    usersPage: usersReducer
})


const store = createStore(reducers)

window.store = store;

export default store