import React, {FC} from 'react';
import styles from './OldPosts.module.css';
import {PostItemType} from "../../../../../interfaces/types";


type OldPostsPropsType = {
    userAvatar: string
    postData: PostItemType
}

export const OldPosts: FC<OldPostsPropsType> = ({userAvatar, postData}) => {
    return (
        <div className={styles.container}>
            <div className={styles.post}>
                <img className={styles.userAvatar}
                     src={userAvatar}
                     alt='user_avatar'/>
                <p>{postData.postTitle}</p>
            </div>
            <div className={styles.likes}>
                <span className={styles.likeAmount}>{postData.likeAmount}</span>
                <button className={styles.like}>like</button>
            </div>
        </div>
    );
};