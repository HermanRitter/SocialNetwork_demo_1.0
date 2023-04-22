import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 0},
        {id: 2, message: 'It\'s my first post', likesCount: 23},
        {id: 3, message: 'blablabla =)', likesCount: 19},
        {id: 4, message: 'SHALOM!', likesCount: 5678},
    ],
    profile: null,
    status: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [ ...state.posts, newPost],
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        default:
            return state
    }

}

export let addPostActionCreator = (newPostText) => {
    return {
        type: ADD_POST, newPostText
    }
}

export let setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE, profile
    }
}

export let setStatus = (status) => {
    return {
        type: SET_STATUS, status
    }
}

export let deletePost = (postId) => {
    return {
        type: DELETE_POST, postId
    }
}
export let getUserProfile = (userId)  => async (dispatch) => {
    let response = await usersAPI.getProfile(userId)
            dispatch(setUserProfile(response.data));
}

export let getStatus = (userId)  => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
            dispatch(setStatus(response.data));
}

export let updateStatus = (status)  => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
}

export default profileReducer;