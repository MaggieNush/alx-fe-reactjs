import React, { useState } from 'react';

// The AddTodoForm component takes a function `onAddTodo` as a prop.
// This function will be called with the text of the new todo.
const AddTodoForm = ({ onAddTodo }) => {
  const [newTodoText, setNewTodoText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodoText.trim() === '') {
      return; // Do not add empty todos
    }
    
    // Call the function passed from the parent component
    onAddTodo(newTodoText);
    
    // Clear the input field after submission
    setNewTodoText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
        placeholder="Add a new todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodoForm;