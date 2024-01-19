import React, {FC, memo, useCallback} from "react";
import {User} from "../../../../interfaces/types";
import {Button} from "../../../shared/Button/Button";
import styles from './UserCard.module.css'
import {useDispatch} from "react-redux";
import {followAC, unfollowAC} from "../../../../store/reducers/usersReducer/usersReducer";

type UserCardProps = {
    user: User
}

export const UserCard: FC<UserCardProps> = memo(({user}) => {
    const dispatch = useDispatch();
    const onFollowBtnClick = () => dispatch(followAC(user.userId));
    const onUnfollowBtnClick = () => dispatch(unfollowAC(user.userId));

    const onViewProfileBtnClick = useCallback(() => {}, []);

    return (
        <li className={styles.container}>
            <div className={styles.avatarAndBtn}>
                <img src={user.userAvatar} alt={'user avatar'} className={styles.avatar}/>
                {user.isFriend
                    ? <Button title={'Unfollow'} callback={onUnfollowBtnClick} type={'secondary'} style={styles.btnFollow}/>
                    : <Button title={'Follow'} callback={onFollowBtnClick} type={'main'} style={styles.btnFollow}/>
                }

            </div>
            <div className={styles.content}>
                <div className={styles.nameAndAddress}>
                    <span className={styles.userName}>{user.userName}</span>
                    <span className={styles.cityAddress}>{user.userCityAddress}</span>
                </div>
                <span className={styles.quot}>{user.userQuot}</span>
                <Button title={'View Profile'} callback={onViewProfileBtnClick} type={'secondary'} style={styles.btnViewProfile}/>
            </div>

        </li>
    )
});