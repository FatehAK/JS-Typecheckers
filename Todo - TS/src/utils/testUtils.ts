import { createStore } from 'redux';
import reducers from '../reducers/index';
import { ShallowWrapper } from 'enzyme';

//find by attr
export const findByAttr = (wrapper: ShallowWrapper, attr: string) => {
    return wrapper.find(`[data-test="${attr}"]`);
};

//redux store
export const storeFactory = (initialState: {}) => {
    return createStore(reducers, initialState);
};
