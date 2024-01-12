import {User, FriendsMessagesData} from "../../../interfaces/types";

const initialState: FriendsMessagesData = [
    {
        messageId: '02',
        message: 'Hi! How are you?',
        sendFromFriendId: '0001',
        time: '09:00',
    },
];

const DELETE_FRIEND_MESSAGE = 'Delete-friend-message';

type FriendsMessagesReducerAction = DeleteFriendMessageAC

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