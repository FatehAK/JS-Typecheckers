import { createStore } from 'redux';
import reducers from '../reducers/index';

//find by attr
export const findByAttr = (wrapper, attr) => {
    return wrapper.find(`[data-test="${attr}"]`);
};

//redux store
export const storeFactory = (initialState) => {
    return createStore(reducers, initialState);
};
