import React, { FC } from "react";
import styles from "./NewPost.module.css";
import { Button } from "components/shared/Button/Button";
import { Textarea } from "components/shared/Textarea/Textarea";
import { useNewPost } from "./useNewPost/useNewPost";
import { useParams } from "react-router-dom";
import { useAppSelector } from "store/reduxStore";
import { selectUserId } from "store/reducers/authReducer/authSelectors";

export const NewPost: FC = () => {
    const { userId } = useParams();
    const authUserId = useAppSelector(selectUserId);
    const { title, onTitleChange, onAddBtnClick, onCancelBtnClick } = useNewPost();

    const updateDenied = Number(userId) !== authUserId;

    return (
        <div className={styles.container}>
            <Textarea value={title} callback={onTitleChange} placeholder="Write new post" style={styles.textarea} />
            <div className={styles.buttons}>
                <Button
                    title={"Add post"}
                    callback={onAddBtnClick}
                    type={"main"}
                    style={styles.button}
                    isDisabled={(!title.trim() || updateDenied) && !!userId}
                />
                <Button
                    title={"Cancel"}
                    callback={onCancelBtnClick}
                    type={"secondary"}
                    style={styles.button}
                    isDisabled={(!title.trim() || updateDenied) && !!userId}
                />
            </div>
        </div>
    );
};
