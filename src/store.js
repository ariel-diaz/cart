import React, {useReducer} from 'react';
import reducer, {initialState} from './reducer';


const Store = React.createContext();

const createStore = ( (reducer,initialStore) => {
    const [state, dispatch] = useReducer(reducer, initialStore);
    return { state, dispatch }
});


const Provider = ({children}) => {
    const store = createStore(reducer, initialState);
    return <Store.Provider value={store}>{children}</Store.Provider>

}

export {Store , Provider}