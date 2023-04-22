import React from "react";
import styles from './Users.module.css'
import userPhoto from "../../assets/images/user.png"
import {NavLink} from "react-router-dom";

let User = ({user, ...props}) => {

    return (
        <div key={user.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.usersPhoto}/>
                            </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button disabled={props.toggleIsFollowingProcess.some(id => id === user.id)} onClick={() => {
                                props.unFollow(user.id);
                            }}>Unfollow</button>
                            : <button disabled={props.toggleIsFollowingProcess.some(id => id === user.id)} onClick={() => {
                                props.follow(user.id);
                            }}>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{'user.location.country'}</div>
                        <div>{'user.location.city'}</div>
                    </span>
                </span>
            </div>)

}

export default User