import React from 'react';
import {addPostActionCreator, } from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";




let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (profileFormBody) => {
            dispatch(addPostActionCreator(profileFormBody))
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;
