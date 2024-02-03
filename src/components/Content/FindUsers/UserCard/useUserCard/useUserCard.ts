import {useDispatch} from "react-redux";
import {useCallback} from "react";
import {followAC, unfollowAC} from "../../../../../store/reducers/usersReducer/usersReducer";
import {User} from "../../../../../interfaces/types";
import {useNavigate} from "react-router-dom";
import {usersApi} from "../../../../../api/users-api/usersApi";
import {setFriendsAC} from "../../../../../store/reducers/friendsReducer/friendsReducer";

export const useUserCard = (user: User) => {
    const dispatch = useDispatch();
    const navigateTo = useNavigate();

    const onFollowBtnClick = useCallback(() => {
        usersApi.follow(user.id)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(followAC(user.id))
                }
            })
        const uriParams = {
            friend: true
        };
        usersApi.getFriends(uriParams)
            .then(res => {
                dispatch(setFriendsAC(res.data.items, res.data.totalCount));
            })
    }, [dispatch, user]);

    const onUnfollowBtnClick = useCallback(() => {
        usersApi.unfollow(user.id)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(unfollowAC(user.id))
                }
            })
        const uriParams = {
            friend: true
        };
        usersApi.getFriends(uriParams)
            .then(res => {
                dispatch(setFriendsAC(res.data.items, res.data.totalCount));
            })
    }, [dispatch, user]);

    const onViewProfileBtnClick = useCallback((userId: number) => {
        navigateTo(`/profile/${userId}`);
    }, [navigateTo]);

    return {onFollowBtnClick, onUnfollowBtnClick, onViewProfileBtnClick}
}
