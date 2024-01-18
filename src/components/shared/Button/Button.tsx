import React, {FC, memo, useMemo} from "react";
import styles from "./Button.module.css"

type ButtonProps = {
    title: string
    callback: () => void
    type: 'main' | 'secondary'
    style?: string
    isDisabled?: boolean
}
export const Button: FC<ButtonProps> = memo(({title, callback, type, style, isDisabled}) => {
    const onClickHandler = () => {
        callback()
    };
    const buttonTypesStyle = useMemo((): string => {
        switch (type) {
            case "main":
                return styles.buttonMain
            case "secondary":
                return styles.buttonSecondary
            default:
                return ''
        }
    }, [type]);
    return(
        <button onClick={onClickHandler}
                className={styles.button + ' ' + buttonTypesStyle + ' ' + style}
                disabled={isDisabled}
        >
            {title}
        </button>
    )
});