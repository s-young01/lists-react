import React from 'react';

const Todolist = ({todoLists, delTodoLists, onIsDoneToggle}) => {
    return (
        <div>
            <ul className="todoLists">
                {todoLists.map(todo=><li key={todo.id}
                style={{color: todo.isDone ? '#ccc': '#333'}}>
                <span onClick={() => onIsDoneToggle(todo.id)}>{todo.text}</span>
                <button onClick={() => delTodoLists(todo.id)}>X</button></li>)}
                {/* delTodoLists(todo.id) 이렇게 넣으면 호출 함수자체가 들어가야함 */}
            </ul>
        </div>
    );
};

export default Todolist;