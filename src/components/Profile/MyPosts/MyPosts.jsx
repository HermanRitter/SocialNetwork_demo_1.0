import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post.jsx'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../Util/Validator/validators";
import {TextArea} from "../../common/FormsControl/FormsControl";

const maxLength10 = maxLengthCreator(10);

const MyPosts = React.memo(({posts, newPostText, addPost}) => {

    let AddPost = (values) => {
        addPost(values.newPostText)
    }

    let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    console.log('render')
    return (

        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <ProfilePostReduxForm onSubmit={AddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
});

const AddNewPostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    validate={[required, maxLength10]}
                    name='newPostText'
                    component={TextArea}
                    placeholder={'Post message'}/>
            </div>
            <div>
                <button className={props.btn}>Add post</button>
            </div>
        </form>
    )
}

const ProfilePostReduxForm = reduxForm({form: 'profileAddNewPostForm'})(AddNewPostForm)

export default MyPosts;
