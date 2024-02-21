import React, { ChangeEvent, FC, memo, useCallback, useState } from "react";
import styles from "./ProfileStatus.module.css";

type EditableTitleProps = {
    oldTitle: string;
    setNewTitle: (title: string) => void;
    disabled?: boolean;
    placeholder?: string;
    stylesClass?: string;
};

type Mode = "viewMode" | "inputMode";
export const ProfileStatus: FC<EditableTitleProps> = memo(({
                                                               oldTitle,
                                                               setNewTitle,
                                                               disabled,
                                                               placeholder,
                                                               stylesClass
                                                           }) => {
        const [updatedTitle, setUpdatedTitle] = useState<string>(oldTitle);
        const [mode, setMode] = useState<Mode>("viewMode");

        const titleInputChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
            setUpdatedTitle(e.currentTarget.value);
        }, [setUpdatedTitle]);
        const inputBlurHandler = useCallback(() => {
            setNewTitle(updatedTitle);
            setMode("viewMode");
        }, [setNewTitle, updatedTitle]);
        const setModeHandler = useCallback(() => setMode("inputMode"), [setMode])

        return (
            <>
                {mode === "viewMode" ? (
                    <span
                        className={styles.editableTitle + " " + stylesClass}
                        onDoubleClick={setModeHandler}
                    >
                        {oldTitle}
                    </span>
                ) : (
                    <input
                        className={styles.editableTitleInput}
                        value={updatedTitle}
                        onChange={titleInputChangeHandler}
                        onBlur={inputBlurHandler}
                        autoFocus
                        disabled={disabled}
                        placeholder={placeholder}
                    />
                )}
            </>
        );
    }
);