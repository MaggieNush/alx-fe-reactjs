import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../TodoList';

// A helper function to get the list item for a specific todo text
const getTodoItem = (text) => screen.getByText(text).closest('li');

describe('TodoList Component', () => {
  // Test 1: Renders the component and initial todos
  test('renders the component with the correct heading and initial todos', () => {
    render(<TodoList />);
    
    // Check if the main heading is present
    expect(screen.getByRole('heading', { name: /my todo list/i })).toBeInTheDocument();
    
    // Check if the initial todo items are rendered
    expect(screen.getByText('Develop a Sales Strategy App')).toBeInTheDocument();
    expect(screen.getByText('Study React Testing Library')).toBeInTheDocument();
    expect(screen.getByText('Write comprehensive tests for React components')).toBeInTheDocument();
  });

  // Test 2: Adds a new todo item
  test('allows a user to add a new todo item', () => {
    render(<TodoList />);

    const inputElement = screen.getByPlaceholderText('Add a new todo');
    const addButton = screen.getByRole('button', { name: /add todo/i });

    // Simulate typing into the input field
    fireEvent.change(inputElement, { target: { value: 'Buy groceries' } });
    
    // Check that the input value is updated
    expect(inputElement.value).toBe('Buy groceries');

    // Simulate clicking the add button
    fireEvent.click(addButton);

    // Verify the new todo item appears in the list
    expect(screen.getByText('Buy groceries')).toBeInTheDocument();

    // Verify the input field is cleared after adding the todo
    expect(inputElement.value).toBe('');
  });
  
  // Test 3: Toggles the completion status of a todo
  test('allows a user to toggle a todo completion status', () => {
    render(<TodoList />);

    const todoText = 'Develop a Sales Strategy App';
    const todoItem = screen.getByText(todoText);

    // Initial state: The todo item should not be "completed" (no line-through style)
    expect(todoItem).not.toHaveStyle('text-decoration: line-through');

    // Simulate clicking the todo to toggle its status
    fireEvent.click(todoItem);
    
    // Verify the todo item now has the completed style
    expect(todoItem).toHaveStyle('text-decoration: line-through');
    
    // Click the item again to toggle it back
    fireEvent.click(todoItem);

    // Verify the style is removed
    expect(todoItem).not.toHaveStyle('text-decoration: line-through');
  });

  // Test 4: Deletes a todo item
  test('allows a user to delete a todo item', () => {
    render(<TodoList />);

    const todoText = 'Study React Testing Library';
    
    // Find the todo item we want to delete
    const todoItem = screen.getByText(todoText);
    
    // Find the delete button associated with that todo item
    // We use a more robust way to find the specific button to avoid conflicts
    const deleteButton = getTodoItem(todoText).querySelector('button');

    // Simulate clicking the delete button
    fireEvent.click(deleteButton);

    // Verify the todo item is no longer in the document
    expect(todoItem).not.toBeInTheDocument();
  });
});