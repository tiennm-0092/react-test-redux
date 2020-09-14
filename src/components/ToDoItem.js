import React from 'react';
import '../css/ToDoItem.css';
import checkDoneImg from '../img/foursquare-check-in.svg';
import checkImg from '../img/tick.svg';

function ToDoItem(props) {
    const { item } = props;
    let className = 'ToDoItem';
    let url= checkImg;
    if (item.isComplete) {
        url=checkDoneImg;
        className += ' ToDoItem-complete';
    }
    return (
        <div className={className} onClick={props.handleClick}>
            <img alt="Check" src={url} width={32} height={32} />
           <p>{item.title}</p> 
        </div>
    );
}

export default ToDoItem;