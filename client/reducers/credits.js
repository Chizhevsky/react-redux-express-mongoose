export default function reducer(state = {
    credits: [
        {
            name: 'Alexey Chizhevsky',
            money: 5000,
            secret: '',
            month: [true, true]
        },
        {
            name: 'Dzimtri Safin',
            money: 9000,
            secret: '',
            month: [true]
        },
        {
            name: 'Evgeni Garlukovich',
            money: 15000,
            secret: '',
            month: []
        }
    ]
}, action) {
    switch(action.type){
        case 'UPDATE_CREDITS': {
            return {...state}
        }
        case 'PAY_CREDIT': {
            return {...state, credits: action.payload}
        }
        case 'TAKE_CREDIT': {
            return {...state, credits: action.payload}
        }
    }
    return state;
}