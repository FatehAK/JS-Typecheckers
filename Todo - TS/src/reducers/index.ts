import { combineReducers } from 'redux';

export const itemsReducer = (state: [] = [], action: {payload: {} | string, type: string}) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.payload];
        case 'DELETE_ITEM':
            const filteredItems = state.filter((item: {id: string}) => item.id !== action.payload);
            return [...filteredItems];
        default:
            return state;
    }
};

export default combineReducers({
    //@ts-ignore
    items: itemsReducer
});
