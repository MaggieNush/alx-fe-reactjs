import React from "react";

const TodoItem = ({ todo, onDelete }) => {
  return (
    <li className="flex justify-between items-center p-2 border-b border-gray-200">
      <span>{todo.text}</span>
      <button
        onClick={() => onDelete(todo.id)}
        className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;