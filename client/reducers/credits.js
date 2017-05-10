export default function reducer(state = {
    credits: []
}, action) {
    switch(action.type){
        case 'UPDATE_CREDITS': {
            return {...state, credits: action.payload}
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