const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'

let initialState = {
    messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Yo" }
    ],
    dialogs: [
        { id: 1, name: "Anna" },
        { id: 2, name: "Sasha" }
    ],
    newMessageBody: ''
}


const dialogs = (state = initialState, action) => {
    let stateCopy;

    switch (action.type) {
        case ADD_MESSAGE:
            let body = state.newMessageBody

            return (
                stateCopy = {
                    ...state,
                    newMessageBody: " ",
                    messages: [...state.messages, { id: 5, message: body }]
                })

        case UPDATE_NEW_MESSAGE_TEXT:
            return (
                stateCopy = {
                    ...state,
                    newMessageBody: action.newText
                })

        default: return state;
    }

}

export const NewMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}

export const updateNewMessageActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
}

export default dialogs
