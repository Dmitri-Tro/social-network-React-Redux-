import React, {FC} from 'react';
import styles from './Profile.module.css';
import {UserInfo} from "./UserInfo/UserInfo";
import {Posts} from "./UserPosts/Posts";
import {PostItemType, PostsDataType} from "../../../interfaces/types";


type ProfilePropsType = {
    postsData: PostsDataType
    setPostsData: (newPost: PostItemType) => void
}

export const Profile: FC<ProfilePropsType> = ({postsData, setPostsData}) => {
    return (
        <div className={styles.container}>
            <img className={styles.image} alt='profile_image'
                 src='https://gamerwall.pro/uploads/posts/2022-06/1655506212_3-gamerwall-pro-p-more-panorama-priroda-krasivo-foto-4.jpg'/>
            <div className={styles.user}>
                <UserInfo />
                <Posts postsData={postsData} setPostsData={setPostsData} />
            </div>
        </div>
    );
};