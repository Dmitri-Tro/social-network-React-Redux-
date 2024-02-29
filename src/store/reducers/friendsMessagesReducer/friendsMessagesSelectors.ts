import { RootState } from "store/reduxStore";
import { FriendsMessagesData } from "interfaces/types";

export const selectFriendsMessages = (state: RootState): FriendsMessagesData => state.friendsMessagesData;
