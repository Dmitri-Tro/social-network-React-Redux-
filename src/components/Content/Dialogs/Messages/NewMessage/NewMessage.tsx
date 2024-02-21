import React, { FC } from "react";
import styles from "./NewMessage.module.css";
import { Textarea } from "components/shared/Textarea/Textarea";
import { Button } from "components/shared/Button/Button";
import { useNewMessage } from "./useNewMessage/useNewMessage";

export const NewMessage: FC = () => {
    const {
        title,
        onTitleInputChange,
        onSendBtnClick,
        onCancelBtnClick
    } = useNewMessage();

    return (
        <div className={styles.container}>
            <Textarea
                value={title}
                callback={onTitleInputChange}
                placeholder="Write new message"
                style={styles.textarea}
            />
            <div className={styles.buttons}>
                <Button title={"Send"}
                        callback={onSendBtnClick}
                        type={"main"}
                        isDisabled={!title.trim()}
                />
                <Button title={"Cancel"}
                        callback={onCancelBtnClick}
                        type={"secondary"}
                        isDisabled={!title.trim()}
                />
            </div>
        </div>
    );
};
