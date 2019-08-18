//@ts-check
import React from 'react';
import { connect } from 'react-redux';
import { addItem, deleteItem } from '../../actions/index';
import InputTodo from '../InputTodo/InputTodo';
import TodoList from '../TodoList/TodoList';
import './App.css';

/**
 * @typedef {object} Props
 * @prop {array} items
 * @prop {function} addItem
 * @prop {function} deleteItem
 * @extends {React.Component<Props>}
 */
class App extends React.Component {
    render() {
        return (
            <div className="app" data-test="component-app">
                <div className="app-head">
                    <h1>Todo <sup className="app-head-type">JSDoc</sup></h1>
                </div>
                <InputTodo addItem={this.props.addItem} />
                <TodoList items={this.props.items} deleteItem={this.props.deleteItem} />
            </div>
        );
    }
}

/**
 * Maps redux store to props
 * @param {object} state - Store object
 * @returns {object} - Props object
 */
const mapStateToProps = (state) => ({
    items: state.items
});

export default connect(mapStateToProps, { addItem, deleteItem })(App);
