// @flow
import React from 'react';
import { connect } from 'react-redux';
import { addItem, deleteItem } from '../../actions/index';
import InputTodo from '../InputTodo/InputTodo';
import TodoList from '../TodoList/TodoList';
import './App.css';

type AppProps = {
    items: {id: string, content: string}[];
    addItem: Function;
    deleteItem: Function;
};

class App extends React.Component<AppProps> {
    render() {
        return (
            <div className="app" data-test="component-app">
                <div className="app-head">
                    <h1>Todo <sup className="app-head-type">Flow</sup></h1>
                </div>
                <InputTodo addItem={this.props.addItem} />
                <TodoList items={this.props.items} deleteItem={this.props.deleteItem} />
            </div>
        );
    }
}

const mapStateToProps = (state: { items: [] }) => ({
    items: state.items
});

export default connect(mapStateToProps, { addItem, deleteItem })(App);
