import {ChangeEvent, useCallback, useState} from "react";
import {addPostAC} from "../../../../../../store/reducers/postsReducer/postsReducer";
import {useAppDispatch} from "../../../../../../store/reduxStore";

export const useNewPost = () => {
    const [title, setTitle] = useState('');
    const dispatch = useAppDispatch();

    const onTitleChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
        setTitle(e.currentTarget.value);
    }, []);
    const onAddBtnClick = useCallback(() => {
        dispatch(addPostAC(title));
        setTitle('');
    }, [dispatch, title]);
    const onCancelBtnClick = useCallback(() => {
        setTitle('');
    }, []);
    return {title, onTitleChange, onAddBtnClick, onCancelBtnClick}
}