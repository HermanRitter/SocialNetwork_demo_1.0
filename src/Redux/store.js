import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";


let store = {
    _state: {
        dialogsPage: {
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
            newMessageBody: 'erf',
        },

        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 0},
                {id: 2, message: 'It\'s my first post', likesCount: 23},
                {id: 3, message: 'blablabla =)', likesCount: 19},
                {id: 4, message: 'SHALOM!', likesCount: 5678},
            ],
            newPostText: 'kamasutra',
        }
    },

    _callSubscriber() {
        console.log('state changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    getState() {
      return this._state
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state)
    }

}





window.state = store;







export default store