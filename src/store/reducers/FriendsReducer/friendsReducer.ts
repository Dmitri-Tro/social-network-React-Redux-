import {FriendsData} from "../../../interfaces/types";

type FriendsReducerAction = {
    type: string
}

const initialState: FriendsData = [
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
];
export const friendsReducer = (state: FriendsData = initialState, action: FriendsReducerAction) => {
    switch (action.type) {
        default:
            return state
    }
}