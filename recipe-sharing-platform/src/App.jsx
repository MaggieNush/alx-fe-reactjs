import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';
import AddRecipeForm from './components/AddRecipeForm'; // Import the new component
import './index.css';

function App() {
  return (
    <Router>
      <div className='bg-gray-100 min-h-screen'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-recipe" element={<AddRecipeForm />} /> {/* New route for the form */}
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;