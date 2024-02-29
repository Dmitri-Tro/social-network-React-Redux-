import React, { ChangeEvent, FC, memo, useCallback } from "react";
import styles from "./Input.module.css";

type InputProps = {
    type: "text" | "password" | "email" | "tel" | "number" | "search" | "url";
    value: string;
    callback: (e: ChangeEvent<HTMLInputElement>) => void;
    autoFocus?: boolean;
    autoComplete?: "on" | "off";
    onBlurCallback?: () => void;
    placeholder?: string;
    style?: string;
};
export const Input: FC<InputProps> = memo(({
                                               type,
                                               value,
                                               callback,
                                               autoFocus,
                                               autoComplete,
                                               onBlurCallback,
                                               placeholder,
                                               style
                                           }) => {

        const onChangeHandler = useCallback(
            (e: ChangeEvent<HTMLInputElement>) => {
                callback(e);
            },
            [callback]
        );
        return (
            <input
                type={type}
                value={value}
                onChange={onChangeHandler}
                autoFocus={autoFocus}
                autoComplete={autoComplete}
                onBlur={onBlurCallback}
                placeholder={placeholder}
                className={styles.input + " " + style}
            />
        );
    }
);
