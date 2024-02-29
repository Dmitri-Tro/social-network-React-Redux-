import { UserMessage, UserMessagesData } from "interfaces/types";
import { v1 } from "uuid";
import { AppThunk } from "store/reduxStore";
import { setIsFetchingAC } from "store/reducers/appReducer/appReducer";

const ADD_NEW_USER_MESSAGE = "Add-new-user-message";
const UPDATE_MESSAGE_TITLE = "Update-message-title";
const DELETE_MESSAGE = "Delete-message";

export const userMessagesReducer = (
    state: UserMessagesData = [],
    action: UserMessagesReducerAction,
): UserMessagesData => {
    switch (action.type) {
        case ADD_NEW_USER_MESSAGE:
            const newMessage: UserMessage = {
                messageId: v1(),
                message: action.payload.messageTitle,
                time: new Date().toTimeString().slice(0, 5),
            };
            return [newMessage, ...state];
        case UPDATE_MESSAGE_TITLE:
            return state.map((message) =>
                message.messageId === action.payload.messageId
                    ? { ...message, message: action.payload.newTitle }
                    : message,
            );
        case DELETE_MESSAGE:
            return state.filter((message) => message.messageId !== action.payload.messageId);
        default:
            return state;
    }
};

// Actions
export const addUserMessageAC = (messageTitle: string) => {
    return {
        type: ADD_NEW_USER_MESSAGE,
        payload: {
            messageTitle,
        },
    } as const;
};
export const updateMessageTitleAC = (messageId: string, newTitle: string) => {
    return {
        type: UPDATE_MESSAGE_TITLE,
        payload: {
            messageId,
            newTitle,
        },
    } as const;
};
export const deleteMessageAC = (messageId: string) => {
    return {
        type: DELETE_MESSAGE,
        payload: {
            messageId,
        },
    } as const;
};

// Thunks
export const addUserMessageTC =
    (title: string): AppThunk =>
    (dispatch) => {
        dispatch(setIsFetchingAC(true));
        dispatch(addUserMessageAC(title));
        dispatch(setIsFetchingAC(false));
    };

export const updateMessageTitleTC =
    (messageId: string, newTitle: string): AppThunk =>
    (dispatch) => {
        dispatch(setIsFetchingAC(true));
        dispatch(updateMessageTitleAC(messageId, newTitle));
        dispatch(setIsFetchingAC(false));
    };

export const deleteMessageTC =
    (messageId: string): AppThunk =>
    (dispatch) => {
        dispatch(setIsFetchingAC(true));
        dispatch(deleteMessageAC(messageId));
        dispatch(setIsFetchingAC(false));
    };

// Types
export type UserMessagesReducerAction =
    | ReturnType<typeof addUserMessageAC>
    | ReturnType<typeof updateMessageTitleAC>
    | ReturnType<typeof deleteMessageAC>;
