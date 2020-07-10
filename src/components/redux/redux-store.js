import profile from './reducers/profile'
import dialogs from './reducers/dialogs'
import sidebar from './reducers/sidebar'


const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
    profile,
    dialogs,
    sidebar
})


const store = createStore(reducers)


export default store