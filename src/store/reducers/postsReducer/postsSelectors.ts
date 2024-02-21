import { RootState } from "store/reduxStore";
import { PostsData } from "interfaces/types";

export const selectPostsData = (state: RootState): PostsData => state.postsData;