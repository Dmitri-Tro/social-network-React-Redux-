import React, { ChangeEvent, FC, memo, useCallback } from "react";
import styles from "./Textarea.module.css";

type InputProps = {
    value: string;
    callback: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    autoFocus?: boolean;
    autoComplete?: "on" | "off";
    onBlurCallback?: () => void;
    placeholder?: string;
    style?: string;
};
export const Textarea: FC<InputProps> = memo(({
                                                  value,
                                                  callback,
                                                  autoFocus,
                                                  autoComplete,
                                                  onBlurCallback,
                                                  placeholder,
                                                  style
                                              }) => {

        const onChangeHandler = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
            callback(e);
        }, [callback]);

        return (
            <textarea
                value={value}
                onChange={onChangeHandler}
                autoFocus={autoFocus}
                autoComplete={autoComplete}
                onBlur={onBlurCallback}
                placeholder={placeholder}
                className={styles.textarea + " " + style}
            />
        );
    }
);
