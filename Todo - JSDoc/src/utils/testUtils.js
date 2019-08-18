/* eslint-disable react/forbid-foreign-prop-types */
import checkPropTypes from 'check-prop-types';
import { createStore } from 'redux';
import reducers from '../reducers/index';

//find element by attrbute `data-test`
export const findByAttr = (wrapper, attr) => {
    return wrapper.find(`[data-test="${attr}"]`);
};

//check props
export const checkProps = (component, props) => {
    const propsError = checkPropTypes(component.propTypes, props, 'prop', component.name);
    return propsError;
};

//Create a testing store with imported reducers, initial state and middleware
export const storeFactory = (initialState) => {
    return createStore(reducers, initialState);
};
