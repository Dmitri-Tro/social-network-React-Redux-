import React, {FC, memo} from "react";
import {Button} from "../../../shared/Button/Button";
import styles from './UserCard.module.css'
import {User} from "../../../../interfaces/types";
import {defaultAvatar} from "../../../../images/images";
import {useUserCard} from "./useUserCard/useUserCard";

type UserCardProps = {
    user: User
}

export const UserCard: FC<UserCardProps> = memo(({user}) => {

const {onFollowBtnClick, onUnfollowBtnClick, onViewProfileBtnClick} = useUserCard(user);

    return (
        <li className={styles.container}>
            <div className={styles.avatarAndBtn}>
                <img src={user.photos.large || user.photos.small || defaultAvatar} alt={'user avatar'}
                     className={styles.avatar}/>
                {user.followed
                    ? <Button title={'Unfollow'}
                              callback={onUnfollowBtnClick} type={'secondary'}
                              style={styles.btnFollow}
                              isDisabled={user.inProgress}
                    />
                    : <Button title={'Follow'}
                              callback={onFollowBtnClick}
                              type={'main'} style={styles.btnFollow}
                              isDisabled={user.inProgress}
                    />
                }
            </div>
            <div className={styles.content}>
                <div className={styles.nameAndAddress}>
                    <span className={styles.userName}>{user.name}</span>
                    <span className={styles.cityAddress}>{'User City Address will be here'}</span>
                </div>
                <span className={styles.quot}>{'Status: ' + (user.status ? user.status : '')}</span>
                <Button title={'View Profile'} callback={() => onViewProfileBtnClick(user.id)} type={'secondary'}
                        style={styles.btnViewProfile}/>
            </div>
        </li>
    )
});