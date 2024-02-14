import {FriendsMessagesData} from "../../../interfaces/types";

const initialState: FriendsMessagesData = [  ];

const DELETE_FRIEND_MESSAGE = 'Delete-friend-message';

export type FriendsMessagesReducerAction = DeleteFriendMessageAC

type DeleteFriendMessageAC = ReturnType<typeof deleteFriendMessageAC>
export const deleteFriendMessageAC = (messageId: string) => {
    return {
        type: DELETE_FRIEND_MESSAGE,
        payload: {
            messageId
        }
    } as const

}

export const friendsMessagesReducer = (state: FriendsMessagesData = initialState, action: FriendsMessagesReducerAction): FriendsMessagesData => {
    switch (action.type) {
        case DELETE_FRIEND_MESSAGE:
            return state.filter(message => message.messageId !== action.payload.messageId);
        default:
            return state
    }
}