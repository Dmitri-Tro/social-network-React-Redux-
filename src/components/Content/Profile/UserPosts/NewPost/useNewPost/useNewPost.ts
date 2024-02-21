import { ChangeEvent, useCallback, useState } from "react";
import { addPostTC } from "store/reducers/postsReducer/postsReducer";
import { useAppDispatch } from "store/reduxStore";

export const useNewPost = () => {
    const [title, setTitle] = useState("");
    const dispatch = useAppDispatch();

    const onTitleChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
        setTitle(e.currentTarget.value);
    }, [setTitle]);
    const onAddBtnClick = useCallback(() => {
        dispatch(addPostTC(title));
        setTitle("");
    }, [dispatch, title, setTitle]);
    const onCancelBtnClick = useCallback(() => {
        setTitle("");
    }, [setTitle]);
    return { title, onTitleChange, onAddBtnClick, onCancelBtnClick };
};
