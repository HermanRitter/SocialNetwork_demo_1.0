import React from 'react';
import s from './Post.module.css'


const Post = (props) => { 
    return (

        <div className={s.item}>
            <img src='https://irecommend.ru/sites/default/files/imagecache/copyright1/user-images/2277146/r9dp4EYbWA57MnwRDJRvjg.jpg' />
            { props.message }
            <div>
                <span>LIKES</span> { props.likesCount }
            </div>

        </div>
        

    );
}

export default Post;
