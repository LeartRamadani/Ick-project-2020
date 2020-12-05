import React, { useState, useEffect } from 'react';
import './style.css';
import Form from './components/Form'
import ToDoList from './components/ToDoList'

function App() {

  //The useStates
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status,setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState ([]);

    //useEFFECT

    useEffect (() => {
      filterHandler();
    }, [todos, status]);

    // useEffect(() => {
    //   getLocalTodos();
    // }, [])

  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
        default: 
        setFilteredTodos(todos)
        break;
    }
  }

  
  //my attempt of putting the data in the local storage 
  // const saveLocalTodos = () => {
  //       localStorage.setItem('todos', JSON.stringify(todos));
  //     }

  //   const getLocalTodos = () => {
  //     if(localStorage.getItem('todos') === null){
  //       localStorage.setItem('todos', JSON.stringify([]));
  //     }  else {
  //        let todoLocal = JSON.parse(localStorage.getItem('todos'));
  //         setTodos(todoLocal);
  //       }
  //   }
  

  return (
    <div className="App">
      <Form
      
      setStatus = {setStatus}
      inputText={inputText} 
      todos={todos}
      setTodos={setTodos} setInputText={setInputText}/>
      <ToDoList
      filteredTodos={filteredTodos}
      setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
