export default function reducer(state = {
    credits: []
}, action) {
    switch(action.type){
        case 'FETCH_CREDITS':{
            return {...state, credits: action.payload}
        }
    }
    return state;
}