// import axios

export function updateCredits() {
    return function(dispatch) {
        dispatch({type: 'UPDATE_CREDITS'});
    }
}

export function takeCredit(credit) {
    return function(dispatch) {
        dispatch({type: 'TAKE_CREDIT', payload: credit})
    }
}

export function payCredit(newCredits) {
    return {
        type: 'PAY_CREDIT',
        payload: newCredits
    }
}