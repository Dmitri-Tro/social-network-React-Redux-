import {useDispatch} from "react-redux";
import {useCallback} from "react";
import {followAC, unfollowAC} from "../../../../../store/reducers/usersReducer/usersReducer";
import {User} from "../../../../../interfaces/types";

export const useUserCard = (user: User) => {
    const dispatch = useDispatch();
    const onFollowBtnClick = useCallback(() => {
        dispatch(followAC(user.id))
        console.log(user)
    }, [dispatch, user]);
    const onUnfollowBtnClick = useCallback(() => {
        dispatch(unfollowAC(user.id))
    }, [dispatch, user]);
    return [onFollowBtnClick, onUnfollowBtnClick]
}