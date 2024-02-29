import React, { FC, memo } from "react";
import styles from "./FriendMessage.module.css";
import { FriendMessage } from "interfaces/types";
import { Button } from "components/shared/Button/Button";
import { defaultAvatar } from "images/images";
import { useFriendMessage } from "./useFriendMessage/useFriendMessage";

type FriendMessageProps = {
    message: FriendMessage;
};

export const FriendsMessage: FC<FriendMessageProps> = memo(({ message }) => {
    const { deleteFriendMessage } = useFriendMessage(message);

    return (
        <div className={styles.container}>
            <div className={styles.userInfo}>
                <img className={styles.userAvatar} src={defaultAvatar} alt="user_avatar" />
                <span className={styles.time}>{message.time}</span>
            </div>
            <div className={styles.messageContent}>
                <p className={styles.message}>{message.message}</p>
                <Button title={"x"} callback={deleteFriendMessage} type={"secondary"} style={styles.delBtn} />
            </div>
        </div>
    );
});
