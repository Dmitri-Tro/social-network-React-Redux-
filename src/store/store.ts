import {StoreType} from "../interfaces/types";

export const store: StoreType = {

    usersData: [
        {
            userName: 'Andrew',
            userId: '01',
            userAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi5VW67cM7e9os3AtB9DyfJp6mtVe5hn1xbIPwn-i6srI7-O5fzA4etvbjksSjPt0f3t4&usqp=CAU'
        },
        {
            userName: 'Dmitri',
            userId: '02',
            userAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWuFI0_-Jq-Iidj39RV9pjv2HOIMiBK_cdCA&usqp=CAU'
        },
        {
            userName: 'Sasha',
            userId: '03',
            userAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQISyCKwL9uUAPihN0HxvJS7YogkWYVlEJgMQ&usqp=CAU'
        },
        {
            userName: 'Sveta',
            userId: '04',
            userAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnqCyUKu9A0f7u51KGK501mv1d5RdAsdwU9A&usqp=CAU'
        },
        {
            userName: 'Valera',
            userId: '05',
            userAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST_G0a-8E9n1iGhebOHkGnWAq76VNm2UeighNxBwORPV5xWeYckGn-z6-TnqJ5o_pVCK4&usqp=CAU'
        },
        {
            userName: 'Viktor',
            userId: '06',
            userAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_eDqXkGY1skjKw33V-RWyPCU7iHsYA11vbvolu86LrQPee-y1LC30d-y0lom5-v5UgQ&usqp=CAU'
        },
        {
            userName: 'Sqidward',
            userId: '07',
            userAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0svHfXIrNp9Fh-xfh3EimCtoe51os5kDP2Q&usqp=CAU'
        },
        {
            userName: 'Patrick',
            userId: '08',
            userAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYVWsODzLT6uDsglfRn8VXT2Ez0LlxsgcAKQ&usqp=CAU'
        },
        {
            userName: 'Mr.Crabs',
            userId: '09',
            userAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJk6K_DtxjoKoK7BpyymgeS7wnDvbuvNeDKA&usqp=CAU'
        },
        {
            userName: 'Sandy',
            userId: '10',
            userAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1BrTdNCR58SezNa44oHxqyPRDy_WhDq24gg&usqp=CAU'
        },
    ],

    friendsData: [
        {
            friendName: 'Sqidward',
            friendId: '01',
            friendAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0svHfXIrNp9Fh-xfh3EimCtoe51os5kDP2Q&usqp=CAU'
        },
        {
            friendName: 'Patrick',
            friendId: '02',
            friendAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYVWsODzLT6uDsglfRn8VXT2Ez0LlxsgcAKQ&usqp=CAU'
        },
        {
            friendName: 'Mr.Crabs',
            friendId: '03',
            friendAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJk6K_DtxjoKoK7BpyymgeS7wnDvbuvNeDKA&usqp=CAU'
        },
        {
            friendName: 'Sandy',
            friendId: '04',
            friendAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1BrTdNCR58SezNa44oHxqyPRDy_WhDq24gg&usqp=CAU'
        },
    ],

    messagesData: [
        {
            messageId: '01',
            userName: 'Andrew',
            message: 'Hi! Nice to meet you here!!!',
            userAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi5VW67cM7e9os3AtB9DyfJp6mtVe5hn1xbIPwn-i6srI7-O5fzA4etvbjksSjPt0f3t4&usqp=CAU'
        },
        {
            messageId: '02',
            userName: 'Spongebob',
            message: 'Hey!',
            userAvatar: 'https://assets.nick.com/uri/mgid:arc:imageassetref:shared.nick.us:a625d441-bbbf-42c8-9927-6a0157aac911?quality=0.7&gen=ntrn&legacyStatusCode=true'
        },
    ],

    postsData: [
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
};