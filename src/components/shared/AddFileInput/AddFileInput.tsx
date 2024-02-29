import React, { ChangeEvent, FC, memo } from "react";
import styles from "./AddFileInput.module.css";

type AddFileInputProps = {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type: string;
    name: string;
    accept: string;
    title?: string;
    style?: string;
};

export const AddFileInput: FC<AddFileInputProps> = memo(({
                                                             title,
                                                             type,
                                                             name,
                                                             accept,
                                                             style,
                                                             onChange
                                                         }) => {
    return (
        <div className={styles.wrapper}>
            <input
                className={styles.input}
                id="addFileInput"
                type={type}
                name={name}
                accept={accept}
                onChange={onChange}
            />
            <label htmlFor={"addFileInput"} className={styles.btn + " " + style}>
                {title}
            </label>
        </div>
    );
});
