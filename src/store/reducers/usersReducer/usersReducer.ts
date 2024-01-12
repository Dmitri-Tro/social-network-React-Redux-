import {UsersData} from "../../../interfaces/types";

type UsersReducerAction = {
    type: string
}

const initialState: UsersData = [
    {
        userName: 'Andrew',
        userId: '0001',
        userAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi5VW67cM7e9os3AtB9DyfJp6mtVe5hn1xbIPwn-i6srI7-O5fzA4etvbjksSjPt0f3t4&usqp=CAU',
        userBirthday: '01.10.2000',
        userCityAddress: 'Helsinki',
        userOccupation: 'Frontend-developer',
        userQuot: ''
    },
    {
        userName: 'Dmitri',
        userId: '0002',
        userAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWuFI0_-Jq-Iidj39RV9pjv2HOIMiBK_cdCA&usqp=CAU',
        userBirthday: '06.12.1987',
        userCityAddress: 'Joensuu',
        userOccupation: 'Frontend-developer',
        userQuot: ''
    },
    {
        userName: 'Sasha',
        userId: '0003',
        userAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQISyCKwL9uUAPihN0HxvJS7YogkWYVlEJgMQ&usqp=CAU',
        userBirthday: '22.09.1990',
        userCityAddress: 'St.Petersburg',
        userOccupation: 'Translator',
        userQuot: ''
    },
    {
        userName: 'Sveta',
        userId: '0004',
        userAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnqCyUKu9A0f7u51KGK501mv1d5RdAsdwU9A&usqp=CAU',
        userBirthday: '14.01.1987',
        userCityAddress: 'Kiev',
        userOccupation: 'Frontend-developer',
        userQuot: ''
    },
    {
        userName: 'Valera',
        userId: '0005',
        userAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST_G0a-8E9n1iGhebOHkGnWAq76VNm2UeighNxBwORPV5xWeYckGn-z6-TnqJ5o_pVCK4&usqp=CAU',
        userBirthday: '14.07.1993',
        userCityAddress: 'Moscow',
        userOccupation: 'HR',
        userQuot: ''
    },
    {
        userName: 'Viktor',
        userId: '0006',
        userAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_eDqXkGY1skjKw33V-RWyPCU7iHsYA11vbvolu86LrQPee-y1LC30d-y0lom5-v5UgQ&usqp=CAU',
        userBirthday: '07.08.1986',
        userCityAddress: 'Minsk',
        userOccupation: 'Designer',
        userQuot: ''

    },
    {
        userName: 'Sqidward',
        userId: '0007',
        userAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0svHfXIrNp9Fh-xfh3EimCtoe51os5kDP2Q&usqp=CAU',
        userBirthday: '17.07.1986',
        userCityAddress: 'Bikini-Bottom',
        userOccupation: 'Cook',
        userQuot: ''
    },
    {
        userName: 'Patrick',
        userId: '0008',
        userAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYVWsODzLT6uDsglfRn8VXT2Ez0LlxsgcAKQ&usqp=CAU',
        userBirthday: '14.07.1986',
        userCityAddress: 'Bikini-Bottom',
        userOccupation: 'Spongebob\'s friend',
        userQuot: ''
    },
    {
        userName: 'Mr.Crabs',
        userId: '0009',
        userAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJk6K_DtxjoKoK7BpyymgeS7wnDvbuvNeDKA&usqp=CAU',
        userBirthday: '16.07.1986',
        userCityAddress: 'Bikini-Bottom',
        userOccupation: 'Businessman',
        userQuot: ''
    },
    {
        userName: 'Sandy',
        userId: '0010',
        userAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1BrTdNCR58SezNa44oHxqyPRDy_WhDq24gg&usqp=CAU',
        userBirthday: '15.07.1986',
        userCityAddress: 'Bikini-Bottom',
        userOccupation: 'Scientist',
        userQuot: ''
    },
    {
        userName: 'SpongeBob',
        userId: '0011',
        userAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpn3rDCMJ-EVttnAT9NMnPhrbbcVnbY7fEJh45hUsHNA&s',
        userBirthday: '14.07.1986',
        userCityAddress: 'Bikini-Bottom',
        userOccupation: 'Cook',
        userQuot: 'If you believe in yourself, with a tiny pinch of magic all your dreams can come true!'
    }
];
export const usersReducer = (state: UsersData = initialState, action: UsersReducerAction) => {
    switch (action.type) {
        default:
            return state
    }
}