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
    photos: {
        small: string | null;
        large: string | null;
    };
} & UserProfileData;

export type UserProfileData = {
    aboutMe: string | null;
    lookingForAJob: boolean;
    lookingForAJobDescription: string | null;
    fullName: string | null;
    contacts: {
        github: string | null;
        vk: string | null;
        facebook: string | null;
        instagram: string | null;
        twitter: string | null;
        website: string | null;
        youtube: string | null;
        mainLink: string | null;
        [key: string]: string | null;
    };
};

export type UserAuthData = {
    id: number | null;
    email: string | null;
    login: string | null;
    isLogin: boolean;
    captcha: string | null;
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
    resultCode: number;
    messages: string[];
    data: {};
};
