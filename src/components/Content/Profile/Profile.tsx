import React, {FC} from 'react';
import styles from './Profile.module.css';
import {UserInfo} from "./UserInfo/UserInfo";
import {Posts} from "./UserPosts/Posts";
import {PostItemType, PostsDataType, UserItemType} from "../../../interfaces/types";


type ProfilePropsType = {
    user: UserItemType
    postsData: Array<PostItemType>
    setPostsData: (userId: string, newPost: PostItemType) => void
}

export const Profile: FC<ProfilePropsType> = ({user, postsData, setPostsData}) => {

    const addNewPost = (newPost: PostItemType) => {
        setPostsData(user.userId, newPost)
    }

    return (
        <div className={styles.container}>
            <img className={styles.image} alt='profile_image'
                 src='https://gamerwall.pro/uploads/posts/2022-06/1655506212_3-gamerwall-pro-p-more-panorama-priroda-krasivo-foto-4.jpg'/>
            <div className={styles.user}>
                <UserInfo user={user} />
                <Posts user={user} postsData={postsData} setPostsData={addNewPost} />
            </div>
        </div>
    );
};