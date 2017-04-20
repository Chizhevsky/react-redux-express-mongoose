export default function reducer(state = {
    credits: []
}, action) {
    switch(action.type){
        case 'FETCH_CREDITS': {
            return {...state, credits: action.payload}
        }
        case 'PAY_CREDIT': {
            let name = action.payload.name,
                secret = action.payload.secret,
                i = 0;
            state.credits.map( (person) => {

                if (person.name === name) {
                    if (person.secret === secret) {
                        if (person.month.length < 12) {
                            person.month.push(true);
                        }
                    }
                }
                ++i;
            });
            return state;
        }
    }
    return state;
}