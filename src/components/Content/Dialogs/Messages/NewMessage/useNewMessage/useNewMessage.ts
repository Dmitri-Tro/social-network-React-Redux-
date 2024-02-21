import { ChangeEvent, useCallback, useState } from "react";
import { addUserMessageTC } from "store/reducers/userMessagesReducer/userMessagesReducer";
import { useAppDispatch } from "store/reduxStore";

export const useNewMessage = () => {
    const [title, setTitle] = useState("");
    const dispatch = useAppDispatch();

    const onTitleInputChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
        setTitle(e.currentTarget.value);
    }, []);
    const onSendBtnClick = useCallback(() => {
        dispatch(addUserMessageTC(title));
        setTitle("");
    }, [dispatch, title]);
    const onCancelBtnClick = useCallback(() => {
        setTitle("");
    }, []);

    return {
        title,
        onTitleInputChange,
        onSendBtnClick,
        onCancelBtnClick
    };
};
