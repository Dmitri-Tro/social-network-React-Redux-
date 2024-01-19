import {useSelector} from "react-redux";
import {RootState} from "../../../../store/reduxStore";
import {UserAuthData, UsersData} from "../../../../interfaces/types";


export const useUsersForeCurrentUser = () => {
    const users = useSelector<RootState, UsersData>(state => state.usersData);
    const currentUser = useSelector<RootState, UserAuthData>(state => state.userAuthData);
    return users.filter(user => user.userId !== currentUser.id);
}