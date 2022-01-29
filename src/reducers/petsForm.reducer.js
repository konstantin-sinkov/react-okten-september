const reducer = (state, action) => {
    if (action.id === 'cat') {
        switch (action.type) {
            case 'ADD_CAT_NAME':
                console.log(state);
                return {...state.cats.push(action.payload)};
            default:
                return state;
        }
    } else {
        switch (action.type) {
            case 'ADD_DOG_NAME':
                return {...state.dogs.push(action.payload)};
            default:
                return state;
        }
    }
}

export default reducer;