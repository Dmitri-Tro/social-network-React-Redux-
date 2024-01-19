import React, {ChangeEvent, FC, useCallback, useState} from 'react';
import styles from './NewMessage.module.css';
import {useDispatch, useSelector} from "react-redux";
import {addUserMessageReducerAC} from "../../../../../store/reducers/userMessagesReducer/userMessagesReducer";
import {RootState} from "../../../../../store/reduxStore";
import {User} from "../../../../../interfaces/types";
import {Textarea} from "../../../../shared/Textarea/Textarea";
import {Button} from "../../../../shared/Button/Button";


export const NewMessage:FC = () => {

    const [title, setTitle] = useState('');
    const friend = useSelector<RootState, User>(state => state.usersData.filter(user => user.isFriend)[0]);
    const dispatch = useDispatch();

    const onTitleInputChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
        setTitle(e.currentTarget.value);
    }, []);
    const onSendBtnClick = useCallback(() => {
        dispatch(addUserMessageReducerAC(title, friend.userId));
        setTitle('');
    }, [dispatch, title, friend.userId]);
    const onCancelBtnClick = useCallback(() => {
        setTitle('');
    }, []);

    return (
        <div className={styles.container}>
            <Textarea value={title}
                      callback={onTitleInputChange}
                      placeholder='Write new message'
                      style={styles.textarea}
            />
            <div className={styles.buttons}>
                <Button title={'Send'} callback={onSendBtnClick} type={'main'} isDisabled={!title.trim()} />
                <Button title={'Cancel'} callback={onCancelBtnClick} type={'secondary'} isDisabled={!title.trim()} />
            </div>
        </div>
    )
};