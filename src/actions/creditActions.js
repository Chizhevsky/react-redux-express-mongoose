// import axios

export function fetchCredits() {
    return function(dispatch) {
        dispatch({
            type: 'FETCH_CREDITS',
            payload: [
                {
                    name: 'Alexey Chizhevsky',
                    money: 5000,
                    month: [true, true]
                },
                {
                    name: 'Dzimtri Safin',
                    money: 9000,
                    month: [true]
                },
                {
                    name: 'Evgeni Garlukovich',
                    money: 15000,
                    month: []
                }
            ]
        });
    }
}