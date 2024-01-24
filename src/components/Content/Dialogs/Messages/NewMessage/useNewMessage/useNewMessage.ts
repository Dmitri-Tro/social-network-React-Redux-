import {ChangeEvent, useCallback, useState} from "react";
import {useDispatch} from "react-redux";
import {addUserMessageReducerAC} from "../../../../../../store/reducers/userMessagesReducer/userMessagesReducer";

export const useNewMessage = () => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    const onTitleInputChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
        setTitle(e.currentTarget.value);
    }, []);
    const onSendBtnClick = useCallback(() => {
        dispatch(addUserMessageReducerAC(title));
        setTitle('');
    }, [dispatch, title]);
    const onCancelBtnClick = useCallback(() => {
        setTitle('');
    }, []);

    return {title, onTitleInputChange, onSendBtnClick, onCancelBtnClick}
};