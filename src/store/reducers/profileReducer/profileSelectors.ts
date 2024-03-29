import { RootState } from "store/reduxStore";
import { ApiUser } from "interfaces/types";

export const selectUserProfile = (state: RootState): ApiUser | null => state.userProfileData.profile as ApiUser;
export const selectUserStatus = (state: RootState): string => state.userProfileData.status;
