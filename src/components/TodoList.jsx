import { useState } from "react";

const TodoList = ({ todos, onDelete, onUpdate }) => {
  return (
    <ul className="space-y-4">
      {todos.map((todo, index) => (
        <li key={index} data-aos="fade-up" className="flex justify-between items-center p-2 bg-gray-800 rounded">
          <span>{todo.task}</span>
          <div>
            <button onClick={() => onUpdate(todo)} className="text-yellow-500 p-2">Edit</button>
            <button onClick={() => onDelete(todo)} className="text-red-500 p-2">Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
