import './App.css';
//import TodoTotal from './components/TodoTotal';
import {useReducer, useState} from 'react';
import HeaderInput from './components/HeaderInput';
import Todolist from './components/Todolist';
//import './components/TodoTotal.css';


function App() {
  const [todoState, setTodoState] = useState({
    todoLists: [
      {id: 1, text: "할일1", isDone: false},
      {id: 2, text: "할일2", isDone: true},
    ],
    inputText: "",
  });
  // id값 상태관리
  const [id, setId] = useState(3);
  const onChange = (e) => {
    setTodoState({
      ...todoState,
      inputText: e.target.value
    });
    
}
const onAddTodo = () => {
  const newTodoLists = [
      ...todoState.todoLists,
      // id의 값에 useState객체의 id상태를 넣어줌
      {id: id, text: todoState.inputText, isDone: false}
  ]
  setTodoState({
    todoLists:newTodoLists,
    inputText: ""
  })
  setId(id + 1);
  console.log(todoState.todoLists)
}
const delTodoLists = (id) =>{
  const newTodoLists = todoState.todoLists.filter(todo => todo.id !== id);
  setTodoState({
    ...todoState,
    todoLists: newTodoLists
  });
}

const onIsDoneToggle = (id) => {
  const newTodoLists = todoState.todoLists.map
  // 항목에 있는 id값과 넘겨받은 id값이 일치 하는지 아닌지 확인
  // => 일치 하지 않으면 원래 있던 isDone값 리턴 / 일치하면 isDone값 변경(수정)됨
  (todo => todo.id === id ? {...todo, isDone: !todo.isDone} : todo);
  setTodoState({
    ...todoState,
    todoLists: newTodoLists
  })
}
  return (
    <div className="App todo">
      {/* HeaderInput 컴포넌트의 props객체의 key 이름을 가져와 사용 */}
      <HeaderInput inputText={todoState.inputText} 
      onChange={onChange} 
      onAddTodo={onAddTodo}/>
      <Todolist todoLists={todoState.todoLists} 
      delTodoLists={delTodoLists}
      onIsDoneToggle={onIsDoneToggle}/>
    </div>
  );
}

export default App;
