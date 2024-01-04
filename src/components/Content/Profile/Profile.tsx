import React, {FC} from 'react';
import styles from './Profile.module.css';
import {UserInfo} from "./UserInfo/UserInfo";
import {Posts} from "./UserPosts/Posts";
import {PostItemType, PostsDataType, UserItemType} from "../../../interfaces/types";


type ProfilePropsType = {
    user: UserItemType
    postsData: Array<PostItemType>
    addPost: (userId: string, title: string) => void
}

export const Profile: FC<ProfilePropsType> = ({user, postsData, addPost}) => {

    const addNewPost = (title: string) => {
        addPost(user.userId, title)
    }

    return (
        <div className={styles.container}>
            <img className={styles.image} alt='profile_image'
                 src='https://gamerwall.pro/uploads/posts/2022-06/1655506212_3-gamerwall-pro-p-more-panorama-priroda-krasivo-foto-4.jpg'/>
            <div className={styles.user}>
                <UserInfo user={user} />
                <Posts user={user} postsData={postsData} addPost={addNewPost} />
            </div>
        </div>
    );
};