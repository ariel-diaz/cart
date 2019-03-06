

export const initialState = {
    cart: []
}




const reducer = ( (state, action) => {
    const reduced = {...state};

    switch(action.type) {
        case "ADD_CART":
        return  reduced;
        default:
            return initialState;
    }
});


export default reducer;