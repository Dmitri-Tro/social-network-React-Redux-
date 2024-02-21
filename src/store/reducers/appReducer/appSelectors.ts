import { RootState } from "store/reduxStore";

export const selectIsFetching = (state: RootState): boolean => state.appState.isFetching;
export const selectError = (state: RootState): string | null => state.appState.error;