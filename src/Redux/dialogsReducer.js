const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimitry'},
        {id: 2, name: 'Edward'},
        {id: 3, name: 'German'},
        {id: 4, name: 'Tommy'},
        {id: 5, name: 'Sofi'},
        {id: 6, name: 'Ginger'},
    ],
    messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yoo!'},
        {id: 4, message: 'Yoo!'},
        {id: 5, message: 'Yoo!'},
    ],
}

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}],
            }
        }
        default:
            return state;
    }
}

export let sendMessageCreator = (newMessageBody) => {
    return {
        type: SEND_MESSAGE, newMessageBody
    }
}

export default dialogsReducer;