export type UsersData = {
    users: User[];
    totalCount: number;
    pageSize: number;
    page: number;
    friend: boolean;
};

export type User = {
    name: string;
    id: number;
    uniqueUrlName?: string;
    photos: {
        small?: string;
        large?: string;
    };
    status?: string;
    followed: boolean;
};

export type ApiUser = {
    userId: number;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    contacts: {
        github: string;
        vk: string;
        facebook: string;
        instagram: string;
        twitter: string;
        website: string;
        youtube: string;
        mainLink: string;
    };
    photos: {
        small: string | null;
        large: string | null;
    };
};

export type UserAuthData = {
    id: number | null;
    email: string | null;
    login: string | null;
    isLogin: boolean;
};

export type ApiAuthData = {
    id: number | null;
    email: string | null;
    login: string | null;
};

export type FriendsData = {
    users: User[];
    totalCount: number;
    isFetching: boolean;
};

export type UserMessagesData = Array<UserMessage>;
export type UserMessage = {
    messageId: string;
    message: string;
    time: string;
};

export type FriendsMessagesData = Array<FriendMessage>;
export type FriendMessage = {
    messageId: string;
    message: string;
    time: string;
};

export type PostsData = Array<Post>;
export type Post = {
    postId: string;
    postTitle: string;
    likeAmount: number;
    isLiked: boolean;
};

export type ResponseError = {
    resultCode: number
    messages: string[],
    data: {}
}
