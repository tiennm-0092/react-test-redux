import React, { useState, useReducer } from 'react';
import './App.css';
import ToDoItem from './components/ToDoItem';
import checkImg from './img/tick.svg';

function App() {
  const [currentText, setCurrentText] = useState('');
  const [todoItems, setTodoItems] = useState([
    { title: 'Mua bim bim', isComplete: false },
    { title: 'Di da bong', isComplete: false },
    { title: 'Di do xang', isComplete: false }
  ]);

  const [count, setCount] = useState(0);

  function onItemClicked(id) {
    let temp = [...todoItems];
    let rightItem = temp.find((e, index) => {
      return index === id;
    })
    rightItem.isComplete = !rightItem.isComplete;
    setTodoItems(temp);
  }

  function handleData(event) {
    if (event.keyCode === 13) {
      let text = event.target.value;
      let temp;
      if (!text) return;
      text = text.trim();
      if (!text) return;
      temp = [
        ...todoItems,
        { title: text, isComplete: false }
      ]
      setTodoItems(temp);
      setCurrentText('');
    }
  }

  function handleChange(event) {
    setCurrentText(event.target.value);
  }

  return (
    <div className="App">
      <div className="header">
        <img src={checkImg} width="32" height="32" />
        <input type="text" placeholder="Add a note." onKeyUp={handleData} value={currentText} onChange={handleChange} />
      </div>
      {
        todoItems.length > 0 ? todoItems.map((item, index) => <ToDoItem key={index} item={item} onHandleClick={() => onItemClicked(index)} />) : 'Nothing here'
      }
    </div>
  );
}

export default App;
