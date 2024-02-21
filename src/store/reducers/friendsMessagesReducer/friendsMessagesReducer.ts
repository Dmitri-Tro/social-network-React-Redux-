import { FriendsMessagesData } from "interfaces/types";
import { AppThunk } from "store/reduxStore";
import { setIsFetchingAC } from "store/reducers/usersReducer/usersReducer";

const DELETE_FRIEND_MESSAGE = "Delete-friend-message";

export const friendsMessagesReducer = (
    state: FriendsMessagesData = [],
    action: FriendsMessagesReducerAction,
): FriendsMessagesData => {
    switch (action.type) {
        case DELETE_FRIEND_MESSAGE:
            return state.filter((message) => message.messageId !== action.payload.messageId);
        default:
            return state;
    }
};

// Actions
export const deleteFriendMessageAC = (messageId: string) => {
    return {
        type: DELETE_FRIEND_MESSAGE,
        payload: {
            messageId,
        },
    } as const;
};

// Thunks
export const deleteFriendMessageTC = (messageId: string): AppThunk => (dispatch) => {
    dispatch(setIsFetchingAC(true));
    dispatch(deleteFriendMessageAC(messageId));
    dispatch(setIsFetchingAC(false));
}

// Types
export type FriendsMessagesReducerAction = ReturnType<typeof deleteFriendMessageAC>;