import React, { useState } from 'react';
import checkImg from '../img/tick.svg';
import ToDoItem from './ToDoItem';


function TodoApp({ todos, addTodo, checkNote }) {
    const [currentText, setCurrentText] = useState('');

    function handleChange(event) {
        setCurrentText(event.target.value);
    }

    return (
        <div className="App">
            <div className="header">
                <img alt="Check" src={checkImg} width="32" height="32" />
                <input type="text" placeholder="Add a note." value={currentText} onChange={handleChange} />
                <button className="button" onClick={() => {
                    addTodo(currentText);
                    setCurrentText('');
                }} >Add</button>
            </div>
            {
                todos.length > 0 ? todos.map((item, index) => <ToDoItem key={index} item={item} handleClick={() => checkNote(index)} />) : 'Nothing here'
            }
        </div>
    );
}

export default TodoApp;