import React, { useRef, useState } from 'react';
import todo_icon from '../assets/imgs/todo_icon.png';
import TodoItems from './TodoItems';

const Todo = () => {
  const inputRef = useRef();

  const [todos, setTodos] = useState([]);
  const add = () => {
    const inputText = inputRef.current.value.trim();
    if (!inputText) return;
    const newTodo = {
      id: Date.now(),
      text: inputText,
      isCompleted: false,
    };
    setTodos((prev) => [...prev, newTodo]);
    inputRef.current.value = '';
  };
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl ">
      {/* Header */}
      <div className="flex items-center my-7 gap-2">
        <img src={todo_icon} className="w-8" />
        <h1 className="text-3xl font-AktivGrotesk-Medium">To-Do List</h1>
      </div>
      {/* Input */}
      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          ref={inputRef}
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
          type="text"
          placeholder="Add your task"
        />
        <button
          onClick={add}
          className="border-none rounded-full bg-orange-600 w-14 h-14 text-white text-lg font-AktivGrotesk-Bold cursor-pointer"
        >
          +
        </button>
      </div>
      {/* List */}
      <div>
        {todos.map((item, index) => {
          return (
            <TodoItems
              key={index}
              text={item.text}
              id={item.id}
              isCompleted={item.isCompleted}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
