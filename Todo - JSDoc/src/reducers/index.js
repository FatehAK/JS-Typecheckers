//@ts-check
import { combineReducers } from 'redux';

/**
 * Add or Delete item reducer
 * @function itemsReducer
 * @param {array} state - State before reducer
 * @param {object} action - Action sent to reducer
 * @returns {array} - New state
 */
export const itemsReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.payload];
        case 'DELETE_ITEM':
            const filteredItems = state.filter((item) => item.id !== action.payload);
            return [...filteredItems];
        default:
            return state;
    }
};

export default combineReducers({
    items: itemsReducer
});
