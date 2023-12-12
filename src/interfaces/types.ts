export type StoreType = {
    usersData: UsersDataType
    friendsData: FriendsDataType
    messagesData: MessagesDataType
    postsData: PostsDataType
}

export type PostsDataType = Array<PostItemType>
export type FriendsDataType = Array<FriendItemType>

export type MessagesDataType = Array<MessageItemType>
export type UsersDataType = Array<UserItemType>

export type MessageItemType = {
    messageId: string;
    userName: string;
    message: string;
    userAvatar: string;
}

export type UserItemType = {
    userName: string;
    userId: string;
    userAvatar: string;
}

export type PostItemType = {
    likeAmount: string;
    postId: string;
    postTitle: string;
}

export type FriendItemType = {
    friendName: string;
    friendId: string;
    friendAvatar: string;
}