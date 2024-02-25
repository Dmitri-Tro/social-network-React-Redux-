import { RootState } from "store/reduxStore";

export const selectIsInitialized = (state: RootState): boolean => state.appState.isInitialized;
export const selectIsFetching = (state: RootState): boolean => state.appState.isFetching;
export const selectError = (state: RootState): string | null => state.appState.error;