import { useCallback } from "react";
import { followingTC, unfollowingTC } from "store/reducers/usersReducer/usersReducer";
import { User } from "interfaces/types";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "store/reduxStore";
import { setStatusAC } from "store/reducers/profileReducer/profileReducer";

export const useUserCard = (user: User) => {
    const dispatch = useAppDispatch();
    const navigateTo = useNavigate();

    const onFollowBtnClick = useCallback(() => {
        dispatch(followingTC(user.id));
    }, [dispatch, user]);

    const onUnfollowBtnClick = useCallback(() => {
        dispatch(unfollowingTC(user.id));
    }, [dispatch, user]);

    const onViewProfileBtnClick = useCallback(
        (userId: number) => {
            dispatch(setStatusAC(''));
            navigateTo(`/profile/${userId}`);
        },
        [dispatch, navigateTo],
    );

    return { onFollowBtnClick, onUnfollowBtnClick, onViewProfileBtnClick };
};
