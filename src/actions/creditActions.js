// import axios

export function updateCredits() {
    return function(dispatch) {
        dispatch({type: 'UPDATE_CREDITS'});
    }
}

/*export function fetchCredits() {
    return {
        type: 'FETCH_CREDITS',
        payload: [
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
    }
}*/

export function payCredit(newCredits) {
    return {
        type: 'PAY_CREDIT',
        payload: newCredits
    }
}