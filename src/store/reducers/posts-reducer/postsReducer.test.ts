import {PostsDataType} from "../../../interfaces/types";
import {addPostReducerAC, postsReducer} from "./postsReducer";

test("should add new post to postsData", () => {
    const startState: PostsDataType = {
        ['0011']: [
            {
                likeAmount: '100',
                postId: '02',
                postTitle: 'It\'s my second post!'
            },
            {
                likeAmount: '98',
                postId: '01',
                postTitle: 'Hi, how are you?'
            },
        ]
    }

    const endState: PostsDataType = postsReducer(startState, addPostReducerAC('0011', 'Yo!!!'));

    expect(endState['0011'].length).toBe(3);
    expect(endState['0011'][0].postId).toBeDefined();
    expect(endState['0011'][0].likeAmount).toBe('0');
    expect(endState['0011'][0].postTitle).toBe('Yo!!!');
})