import React, { useState,useEffect } from "react"


function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  return (
    <div>      
      <h1 className="text-2xl font-bold p-2">To-Do List</h1>
        <div className="flex gap-2 mb-2 p-2" >
          <input
            type="text"
            placeholder="Enter a new to-do item"
            className="border border-gray-300 rounded p-2"        
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button className="bg-blue-500 text-white px-5 py-2 rounded" onClick={handleAddTodo}>Add</button>
        </div>     
      <ul className="mt-4 p-2">
        {todos.map((todo, index) => (
          <li key={index} className="mb-2">{index+1}: {todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
