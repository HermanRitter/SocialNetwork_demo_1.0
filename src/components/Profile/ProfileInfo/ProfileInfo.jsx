import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = ({profile, status, updateStatus}) => {

    if (!profile) {
        return <Preloader />
    }
    return (
        <div>
            {/*<div>*/}
            {/*    <img alt={'alt'} className={s.profileInfoImg} src='https://catherineasquithgallery.com/uploads/posts/2021-12/1639712024_333-catherineasquithgallery-com-p-fon-anime-dlya-intro-rozovii-454.jpg' />*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large} alt=""/>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;