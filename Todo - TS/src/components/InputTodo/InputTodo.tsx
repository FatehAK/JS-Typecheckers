import React from 'react';
import { uniqueId } from 'lodash';
import './InputTodo.css';

interface InputProps {
    addItem: Function;
};

class InputTodo extends React.Component<InputProps> {
    private inputRef: React.RefObject<HTMLInputElement>;

    constructor(props: InputProps) {
        super(props);
        this.inputRef = React.createRef();
    }

    handleClick() {
        if (this.inputRef.current) {
            const content = this.inputRef.current.value;
            if (content && content.length > 0) {
                const todoItem = {
                    id: uniqueId('id_'),
                    content: content
                };
                this.props.addItem(todoItem);
            }
            this.inputRef.current.value = '';
        }
    }

    render() {
        return (
            <div className="input-todo" data-test="component-input-todo">
                <input ref={this.inputRef} type="text" className=" input-box" data-test="input-box" placeholder="Enter Todo Item" />
                <button className="add-button" data-test="add-button" onClick={() => this.handleClick()}><i className="fas fa-plus"></i></button>
            </div>
        );
    }
}

export default InputTodo;
