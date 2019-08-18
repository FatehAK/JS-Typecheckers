// @flow
import React from 'react';
import './TodoItem.css';

type ItemProps = {
    item: {id: string, content: string};
    deleteItem: Function;
};

class TodoItem extends React.Component<ItemProps> {
    handleClick(id: string) {
        this.props.deleteItem(id);
    }

    render() {
        const { id, content } = this.props.item;
        return (
            <div className="todo-item" data-test="component-todo-item">
                <div className="todo-content" data-test="todo-content">{content}</div>
                <button onClick={() => this.handleClick(id)} className="delete-button" data-test="delete-button"><i className="fas fa-check"></i></button>
            </div>
        );
    }
}

export default TodoItem;
