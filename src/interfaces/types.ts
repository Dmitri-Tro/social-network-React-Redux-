export type UsersData = Array<User>
export type User = {
    userName: string
    userId: string
    userAvatar: string
    userBirthday: string
    userCityAddress: string
    userOccupation: string
    userQuot: string
    isFriend: boolean
}

export type UserMessagesData = Array<UserMessage>
export type UserMessage = {
    messageId: string
    message: string
    sendToFriendId: string
    time: string
}

export type FriendsMessagesData = Array<FriendMessage>
export type FriendMessage = {
    messageId: string
    message: string
    sendFromFriendId: string
    time: string
}

export type PostsData = Array<Post>
export type Post = {
    postId: string
    postTitle: string
    likeAmount: number
    isLiked: boolean
}

export type UserAuthData = {
    name: string
    password: string
    id: string
    avatar: string
    birthday: string
    cityAddress: string
    occupation: string
    quot: string
}