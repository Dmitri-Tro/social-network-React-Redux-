import {useSelector} from "react-redux";
import {RootState} from "../../../../store/reduxStore";
import {User} from "../../../../interfaces/types";
import {useMemo} from "react";

export const useFriends = () => {
    const users= useSelector<RootState, User[]>(state => state.usersData.users);
    return useMemo(() => users.filter(user => user.followed), [users]);
}