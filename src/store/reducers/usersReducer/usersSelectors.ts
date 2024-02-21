import { RootState } from "store/reduxStore";
import { UsersData } from "interfaces/types";

export const selectUsersData = (state: RootState): UsersData => state.usersData;
export const selectIsFetching = (state: RootState): boolean => state.usersData.isFetching;