import React, {FC} from 'react';
import styles from './OldPosts.module.css';
import {PostItemType} from "../../../../../interfaces/types";


type OldPostsPropsType = {
    postData: PostItemType
}

export const OldPosts: FC<OldPostsPropsType> = ({postData}) => {
    return (
        <div className={styles.container}>
            <div className={styles.post}>
                <img className={styles.userAvatar}
                     src='https://assets.nick.com/uri/mgid:arc:imageassetref:shared.nick.us:a625d441-bbbf-42c8-9927-6a0157aac911?quality=0.7&gen=ntrn&legacyStatusCode=true'
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