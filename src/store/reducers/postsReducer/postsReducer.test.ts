import { PostsData } from "interfaces/types";
import { addPostAC, deletePostAC, postsReducer, updateLikesAmountAC, updatePostTitleAC } from "./postsReducer";

let startState: PostsData;
beforeEach(() => {
    startState = [
        {
            postId: "02",
            postTitle: "It's my second post!",
            likeAmount: 100,
            isLiked: true,
        },
        {
            postId: "01",
            postTitle: "Hi, how are you?",
            likeAmount: 98,
            isLiked: false,
        },
    ];
});
test("should add new post to postsData", () => {
    const endState: PostsData = postsReducer(startState, addPostAC("Yo!!!"));

    expect(endState.length).toBe(3);
    expect(endState[0].postId).toBeDefined();
    expect(endState[0].postTitle).toBe("Yo!!!");
    expect(endState[0].likeAmount).toBe(0);
    expect(endState[0].isLiked).toBe(false);
});
test("should update likes amount in postsData", () => {
    const endState: PostsData = postsReducer(startState, updateLikesAmountAC("02"));

    expect(endState.length).toBe(2);
    expect(endState[0].likeAmount).toBe(99);
    expect(endState[0].isLiked).toBe(false);
    expect(endState[1].likeAmount).toBe(98);
    expect(endState[1].isLiked).toBe(false);
});
test("should update post title in postsData", () => {
    const endState: PostsData = postsReducer(startState, updatePostTitleAC("02", "Hello world"));

    expect(endState.length).toBe(2);
    expect(endState[0].postTitle).toBe("Hello world");
    expect(endState[1].postTitle).toBe("Hi, how are you?");
});
test("should delete post in postsData", () => {
    const endState: PostsData = postsReducer(startState, deletePostAC("02"));

    expect(endState.length).toBe(1);
    expect(endState[0].postId).toBe("01");
    expect(endState[0].postTitle).toBe("Hi, how are you?");
});
