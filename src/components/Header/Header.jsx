import React from 'react';
import s from './Header.module.css';
import {NavLink, useNavigate} from "react-router-dom";


const Header = (props) => {


    return (
        <header className={s.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png'/>

            <div className={s.loginBlock}>

                {props.isAuth
                    ? <div>
                        <div>{props.login}</div>

                        <button onClick={props.logout}>Logout</button>

                    </div>
                    : <NavLink to='/login'>Login</NavLink>}

            </div>
        </header>
    );
}

export default Header;
