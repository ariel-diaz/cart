import React, { useReducer} from 'react'



export const Store = React.createContext(initialState);

 const initialState = {
    cart: []
}

const reducer = ( (state, action) => {
    switch(action.type) {
        case "ADD_ITEM":
        return  {
            ...state,
            cart: [...state.cart, action.payload]
        }
        case "DELETE_ITEM":
        const listCart = state.cart.filter((p, id) => id !== action.payload);
            return {
                ...state,
                cart: listCart
            }
        default:
            return initialState;
    }
});


export const StoreProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = {state, dispatch};

    return <Store.Provider value={value}>{props.children}</Store.Provider>
}
