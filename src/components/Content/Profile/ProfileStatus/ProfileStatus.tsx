import React, {ChangeEvent, FC, useCallback, useState} from "react";
import styles from './ProfileStatus.module.css'

type EditableTitleProps = {
    oldTitle: string
    setNewTitle: (title: string) => void
    disabled?: boolean
    placeholder?: string
    stylesClass?: string
}

type Mode = 'viewMode' | 'inputMode';
export const ProfileStatus: FC<EditableTitleProps> = React.memo(({
                                                                     oldTitle,
                                                                     setNewTitle,
                                                                     disabled,
                                                                     placeholder,
                                                                     stylesClass
                                                                 }) => {

    const [updatedTitle, setUpdatedTitle] = useState<string>(oldTitle);
    const [mode, setMode] = useState<Mode>('viewMode');
    const onTitleInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setUpdatedTitle(e.currentTarget.value);
    };
    const onInputBlurHandler = useCallback(() => {
        setNewTitle(updatedTitle);
        setMode('viewMode');
    }, [setNewTitle, updatedTitle]);

    return (
        <>
            {mode === 'viewMode' ?
                <span className={styles.editableTitle + ' ' + stylesClass}
                      onDoubleClick={() => setMode('inputMode')}
                >
                    {oldTitle}
                </span> :
                <input className={styles.editableTitleInput}
                       value={updatedTitle}
                       onChange={onTitleInputChangeHandler}
                       onBlur={onInputBlurHandler}
                       autoFocus
                       disabled={disabled}
                       placeholder={placeholder}
                />
            }
        </>
    )
});