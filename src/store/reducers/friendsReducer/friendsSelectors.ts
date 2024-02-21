import { RootState } from "store/reduxStore";
import { User } from "interfaces/types";

export const selectFriends = (state: RootState): User[] => state.friendsData.users