export type UsersDataType = Array<UserItemType>
export type UserItemType = {
    userName: string;
    userPassword: string;
    userId: string;
    userAvatar: string;
    userBirthday: string;
    userCityAddress: string;
    userOccupation: string;
    userQuot: string;
}

export type FriendsDataType = { [key: string]: Array<FriendItemType> }
export type FriendItemType = { friendId: string; }

export type MessagesDataType = Array<MessageItemType>
export type MessageItemType = {
    messageId: string;
    message: string;
    sendFromUserId: string;
    sendToUserId: string;
}

export type PostsDataType = { [key: string]: Array<PostItemType> }
export type PostItemType = {
        likeAmount: string;
        postId: string;
        postTitle: string;
    }

export type UserFriend = {
    friendId: string,
    friendName: string | undefined,
    friendAvatar: string | undefined,
};