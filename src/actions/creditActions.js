// import axios

export function fetchCredits() {
    return function(dispatch) {
        dispatch({
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
        });
    }
}

export function payCredit(name, secret) {
    return function(dispatch) {
        dispatch({
            type: 'PAY_CREDIT',
            payload: {
                name: name,
                secret: secret,
            }
        });
    }
}