import {UserMessage, UserMessagesData} from "../../../interfaces/types";
import {v1} from "uuid";

const initialState: UserMessagesData = [  ];

const ADD_NEW_USER_MESSAGE = 'Add-new-user-message';
const UPDATE_MESSAGE_TITLE = 'Update-message-title';
const DELETE_MESSAGE = 'Delete-message';

export type UserMessagesReducerAction = AddUserMessageReducerAC | UpdateMessageTitleAC | DeleteMessageAC;

type AddUserMessageReducerAC = ReturnType<typeof addUserMessageReducerAC>
export const addUserMessageReducerAC = (messageTitle: string) => {
    return {
        type: ADD_NEW_USER_MESSAGE,
        payload: {
            messageTitle,
        }
    } as const
};

type UpdateMessageTitleAC = ReturnType<typeof updateMessageTitleAC>
export const updateMessageTitleAC = (messageId: string, newTitle: string) => {
    return {
        type: UPDATE_MESSAGE_TITLE,
        payload: {
            messageId,
            newTitle
        }
    }as const
};

type DeleteMessageAC = ReturnType<typeof deleteMessageAC>
export const deleteMessageAC = (messageId: string) => {
    return {
        type: DELETE_MESSAGE,
        payload: {
            messageId
        }
    }as const
};

export const userMessagesReducer = (state: UserMessagesData = initialState, action: UserMessagesReducerAction): UserMessagesData => {
    switch (action.type) {
        case ADD_NEW_USER_MESSAGE:
            const newMessage: UserMessage = {
                messageId: v1(),
                message: action.payload.messageTitle,
                time: new Date().toTimeString().slice(0, 5),
            }
            return [newMessage, ...state];
        case UPDATE_MESSAGE_TITLE:
            return state.map(message => message.messageId === action.payload.messageId
                ? {...message, message: action.payload.newTitle}
                : message);
        case DELETE_MESSAGE:
            return state.filter(message => message.messageId !== action.payload.messageId)
        default:
            return state
    }
}