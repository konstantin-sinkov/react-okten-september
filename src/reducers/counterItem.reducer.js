const reducer = (state, action) => {
    // console.log(id);
    if (action.id === 1) {
        switch (action.type) {
            case '+':
                return {...state, counter1: state.counter1 + 1};
            case '-':
                return {...state, counter1: state.counter1 - 1};
            case 'RESET':
                return {...state, counter1: 0};
            
            default:
                return state;
        }
    } else if (action.id === 2) {
        switch (action.type) {
            case '+':
                return {...state, counter2: state.counter2 + 1};
            case '-':
                return {...state, counter2: state.counter2 - 1};
            case 'RESET':
                return {...state, counter2: 0};
            
            default:
                return state;
        }
        
    } else if (action.id === 3) {
        switch (action.type) {
            case '+':
                return {...state, counter3: state.counter3 + 1};
            case '-':
                return {...state, counter3: state.counter3 - 1};
            case 'RESET':
                return {...state, counter3: 0};
            
            default:
                return state;
        }
    }
}

export default reducer;