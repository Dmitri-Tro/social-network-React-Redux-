import { RootState } from "store/reduxStore";
import { UserMessagesData } from "interfaces/types";

export const selectUserMessages = (state: RootState): UserMessagesData => state.userMessagesData;
