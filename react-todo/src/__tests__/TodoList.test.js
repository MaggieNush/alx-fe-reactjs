import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  // Test 1: Initial render with demo todos
  test('renders initial todos correctly', () => {
    render(<TodoList />);
    
    // Check if initial todos are rendered
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
    
    // Check completed state
    const completedTodo = screen.getByText('Build a Todo App');
    expect(completedTodo).toHaveStyle('text-decoration: line-through');
    
    // Check todo count
    expect(screen.getByText('Total: 3')).toBeInTheDocument();
  });

  // Test 2: Adding a new todo
  test('adds a new todo when form is submitted', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    // Find input and button
    const input = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByText('Add Todo');
    
    // Add new todo
    await user.type(input, 'New Test Todo');
    await user.click(addButton);
    
    // Check if new todo is added
    expect(screen.getByText('New Test Todo')).toBeInTheDocument();
    expect(screen.getByText('Total: 4')).toBeInTheDocument();
  });

  // Test 3: Toggling todo completion
  test('toggles todo completion status when clicked', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    // Get a todo item
    const todoItem = screen.getByText('Learn React');
    
    // Initially not completed
    expect(todoItem).not.toHaveStyle('text-decoration: line-through');
    
    // Click to toggle completion
    await user.click(todoItem);
    
    // Should now be completed
    expect(todoItem).toHaveStyle('text-decoration: line-through');
    
    // Click again to toggle back
    await user.click(todoItem);
    expect(todoItem).not.toHaveStyle('text-decoration: line-through');
  });

  // Test 4: Deleting a todo
  test('deletes a todo when delete button is clicked', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    // Check initial count
    expect(screen.getByText('Total: 3')).toBeInTheDocument();
    
    // Find and click delete button for first todo
    const deleteButtons = screen.getAllByText('Delete');
    await user.click(deleteButtons[0]); // Delete first todo
    
    // Check if todo was deleted
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
    expect(screen.getByText('Total: 2')).toBeInTheDocument();
  });

  // Test 5: Empty todo input validation
  test('does not add empty todo', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByText('Add Todo');
    
    // Try to add empty todo
    await user.type(input, '   '); // Spaces only
    await user.click(addButton);
    
    // Count should remain the same
    expect(screen.getByText('Total: 3')).toBeInTheDocument();
  });

  // Test 6: Todo count updates correctly
  test('displays correct todo counts', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    // Initial counts
    expect(screen.getByText('Total: 3')).toBeInTheDocument();
    expect(screen.getByText('Completed: 1')).toBeInTheDocument();
    expect(screen.getByText('Pending: 2')).toBeInTheDocument();
    
    // Toggle a todo
    const todoItem = screen.getByText('Learn React');
    await user.click(todoItem);
    
    // Updated counts
    expect(screen.getByText('Completed: 2')).toBeInTheDocument();
    expect(screen.getByText('Pending: 1')).toBeInTheDocument();
  });
});