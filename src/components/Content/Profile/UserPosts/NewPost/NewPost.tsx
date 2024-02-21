import React, { FC } from "react";
import styles from "./NewPost.module.css";
import { Button } from "components/shared/Button/Button";
import { Textarea } from "components/shared/Textarea/Textarea";
import { useNewPost } from "./useNewPost/useNewPost";

export const NewPost: FC = () => {
    const {
        title,
        onTitleChange,
        onAddBtnClick,
        onCancelBtnClick
    } = useNewPost();

    return (
        <div className={styles.container}>
            <Textarea value={title}
                      callback={onTitleChange}
                      placeholder="Write new post"
                      style={styles.textarea}
            />
            <div className={styles.buttons}>
                <Button
                    title={"Add post"}
                    callback={onAddBtnClick}
                    type={"main"}
                    style={styles.button}
                    isDisabled={!title.trim()}
                />
                <Button
                    title={"Cancel"}
                    callback={onCancelBtnClick}
                    type={"secondary"}
                    style={styles.button}
                    isDisabled={!title.trim()}
                />
            </div>
        </div>
    );
};
