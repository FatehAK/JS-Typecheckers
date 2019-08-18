// @flow
import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

type ListProps = {
    items: {id: string, content: string}[];
    deleteItem: Function;
};

class TodoList extends React.Component<ListProps> {
    renderList() {
        const items = this.props.items;
        if (items && items.length > 0) {
            return (
                <div className="todo-list" data-test="component-todo-list">
                    {items.map((item) => (
                        <React.Fragment key={item.id}>
                            <TodoItem item={item} deleteItem={this.props.deleteItem} data-test="component-todo-item" />
                            <hr className="todo-item-seperator" />
                        </React.Fragment>
                    ))}
                </div>
            );
        }
        return null;
    }

    render() {
        return (
            <>
                {this.renderList()}
            </>
        );
    }
}

export default TodoList;
