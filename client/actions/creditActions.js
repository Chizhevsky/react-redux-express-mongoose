import axios from 'axios';

export function updateCredits() {
    return function(dispatch) {
        axios.get('http://localhost:3000/').then((response) => {
            dispatch({type: 'UPDATE_CREDITS', payload: response.data});
        });
    }
}

export function takeCredit(credit, newCredit) {
    return function(dispatch) {
        axios.post('http://localhost:3000/new', newCredit);
        dispatch({type: 'TAKE_CREDIT', payload: credit})
    }
}

export function payCredit(newCredits, creditor, month) {
    return function(dispatch) {
        axios.post('http://localhost:3000/', {name: creditor, month: month});
        dispatch({type: 'PAY_CREDIT', payload: newCredits});
    }
}