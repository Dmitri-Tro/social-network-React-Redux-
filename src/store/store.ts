import {FriendsDataType, MessagesDataType, PostsDataType, UsersDataType} from "../interfaces/types";
import {v1} from "uuid";


const userId1 = v1();
const userId2 = v1();
const userId3 = v1();
const userId4 = v1();
const userId5 = v1();
const userId6 = v1();
const userId7 = v1();
const userId8 = v1();
const userId9 = v1();
const userId10 = v1();
const userId11 = v1();

export const usersData: UsersDataType = [
    {
        userName: 'Andrew',
        userPassword: '0001',
        userId: userId1,
        userAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi5VW67cM7e9os3AtB9DyfJp6mtVe5hn1xbIPwn-i6srI7-O5fzA4etvbjksSjPt0f3t4&usqp=CAU',
        userBirthday: '01.10.2000',
        userCityAddress: 'Helsinki',
        userOccupation: 'Frontend-developer',
        userQuot: ''
    },
    {
        userName: 'Dmitri',
        userPassword: '0002',
        userId: userId2,
        userAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWuFI0_-Jq-Iidj39RV9pjv2HOIMiBK_cdCA&usqp=CAU',
        userBirthday: '06.12.1987',
        userCityAddress: 'Joensuu',
        userOccupation: 'Frontend-developer',
        userQuot: ''
    },
    {
        userName: 'Sasha',
        userPassword: '0003',
        userId: userId3,
        userAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQISyCKwL9uUAPihN0HxvJS7YogkWYVlEJgMQ&usqp=CAU',
        userBirthday: '22.09.1990',
        userCityAddress: 'St.Petersburg',
        userOccupation: 'Translator',
        userQuot: ''
    },
    {
        userName: 'Sveta',
        userPassword: '0004',
        userId: userId4,
        userAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnqCyUKu9A0f7u51KGK501mv1d5RdAsdwU9A&usqp=CAU',
        userBirthday: '14.01.1987',
        userCityAddress: 'Kiev',
        userOccupation: 'Frontend-developer',
        userQuot: ''
    },
    {
        userName: 'Valera',
        userPassword: '0005',
        userId: userId5,
        userAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST_G0a-8E9n1iGhebOHkGnWAq76VNm2UeighNxBwORPV5xWeYckGn-z6-TnqJ5o_pVCK4&usqp=CAU',
        userBirthday: '14.07.1993',
        userCityAddress: 'Moscow',
        userOccupation: 'HR',
        userQuot: ''
    },
    {
        userName: 'Viktor',
        userPassword: '0006',
        userId: userId6,
        userAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_eDqXkGY1skjKw33V-RWyPCU7iHsYA11vbvolu86LrQPee-y1LC30d-y0lom5-v5UgQ&usqp=CAU',
        userBirthday: '07.08.1986',
        userCityAddress: 'Minsk',
        userOccupation: 'Designer',
        userQuot: ''

    },
    {
        userName: 'Sqidward',
        userPassword: '0007',
        userId: userId7,
        userAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0svHfXIrNp9Fh-xfh3EimCtoe51os5kDP2Q&usqp=CAU',
        userBirthday: '17.07.1986',
        userCityAddress: 'Bikini-Bottom',
        userOccupation: 'Cook',
        userQuot: ''
    },
    {
        userName: 'Patrick',
        userPassword: '0008',
        userId: userId8,
        userAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYVWsODzLT6uDsglfRn8VXT2Ez0LlxsgcAKQ&usqp=CAU',
        userBirthday: '14.07.1986',
        userCityAddress: 'Bikini-Bottom',
        userOccupation: 'Spongebob\'s friend',
        userQuot: ''
    },
    {
        userName: 'Mr.Crabs',
        userPassword: '0009',
        userId: userId9,
        userAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJk6K_DtxjoKoK7BpyymgeS7wnDvbuvNeDKA&usqp=CAU',
        userBirthday: '16.07.1986',
        userCityAddress: 'Bikini-Bottom',
        userOccupation: 'Businessman',
        userQuot: ''
    },
    {
        userName: 'Sandy',
        userPassword: '0010',
        userId: userId10,
        userAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1BrTdNCR58SezNa44oHxqyPRDy_WhDq24gg&usqp=CAU',
        userBirthday: '15.07.1986',
        userCityAddress: 'Bikini-Bottom',
        userOccupation: 'Scientist',
        userQuot: ''
    },
    {
        userName: 'SpongeBob',
        userPassword: '0011',
        userId: userId11,
        userAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpn3rDCMJ-EVttnAT9NMnPhrbbcVnbY7fEJh45hUsHNA&s',
        userBirthday: '14.07.1986',
        userCityAddress: 'Bikini-Bottom',
        userOccupation: 'Cook',
        userQuot: 'If you believe in yourself, with a tiny pinch of magic all your dreams can come true!'
    }
];

export const friendsData: FriendsDataType = {
    [userId1]: [
        { friendId: userId6 },
        { friendId: userId2 },
        { friendId: userId3 },
        { friendId: userId4 },
        { friendId: userId5 },
    ],
    [userId2]: [
        { friendId: userId1 },
        { friendId: userId6 },
        { friendId: userId3 },
        { friendId: userId4 },
        { friendId: userId5 },
    ],
    [userId3]: [
        { friendId: userId1 },
        { friendId: userId2 },
        { friendId: userId6 },
        { friendId: userId4 },
        { friendId: userId5 },
    ],
    [userId4]: [
        { friendId: userId1 },
        { friendId: userId2 },
        { friendId: userId3 },
        { friendId: userId6 },
        { friendId: userId5 },
    ],
    [userId5]: [
        { friendId: userId1 },
        { friendId: userId2 },
        { friendId: userId3 },
        { friendId: userId4 },
        { friendId: userId6 },
    ],
    [userId6]: [
        { friendId: userId1 },
        { friendId: userId2 },
        { friendId: userId3 },
        { friendId: userId4 },
        { friendId: userId5 },
    ],
    [userId7]: [
        { friendId: userId11 },
        { friendId: userId8 },
        { friendId: userId9 },
        { friendId: userId10 },
    ],
    [userId8]: [
        { friendId: userId7 },
        { friendId: userId11 },
        { friendId: userId9 },
        { friendId: userId10 },
    ],
    [userId9]: [
        { friendId: userId7 },
        { friendId: userId8 },
        { friendId: userId11 },
        { friendId: userId10 },
    ],
    [userId10]: [
        { friendId: userId7 },
        { friendId: userId8 },
        { friendId: userId9 },
        { friendId: userId11 },
    ],
    [userId11]: [
        { friendId: userId7 },
        { friendId: userId8 },
        { friendId: userId9 },
        { friendId: userId10 },
    ],
};

export const messagesData: MessagesDataType = [
    {
        messageId: '01',
        message: 'Hi! Nice to meet you here!!!',
        sendFromUserId: userId1,
        sendToUserId: userId11,
    },
    {
        messageId: '02',
        message: 'Hey!',
        sendFromUserId: userId11,
        sendToUserId: userId1,
    },
];

export const postsData: PostsDataType = {
    [userId1]: [],
    [userId2]: [],
    [userId3]: [],
    [userId4]: [],
    [userId5]: [],
    [userId6]: [],
    [userId7]: [],
    [userId8]: [],
    [userId9]: [],
    [userId10]: [],
    [userId11]: [
        {
            likeAmount: '0',
            postId: '03',
            postTitle: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo fugiat velit consectetur qui dignissimos minus deserunt in distinctio! Expedita odio dignissimos maxime rem tempore? Saepe perferendis necessitatibus repellat id quibusdam? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo fugiat velit consectetur qui dignissimos minus deserunt in distinctio! Expedita odio dignissimos maxime rem tempore? Saepe perferendis necessitatibus repellat id quibusdam?'
        },
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
    ],
}