import store from './components/redux/redux-store'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'



const renderAll = (state) => {

    ReactDOM.render(
        < App
            state={state}
            dispatch={store.dispatch.bind(store)}  //bind - привязать к store, теперь внутри addPost - this = store
            store={store}
        />,

        document.getElementById('root')
    );
}

renderAll(store.getState())

store.subscribe(() => {
    let state = store.getState()
    renderAll(state)
})