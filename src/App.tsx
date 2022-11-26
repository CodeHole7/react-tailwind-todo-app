import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoList } from './components/todoList';

function App() {
  return (
    <div className="App h-screen flex flex-col items-center">
      <p className='text-3xl font-bold underline'>To-do App</p>
      <TodoList />
    </div>
  );
}

export default App;
