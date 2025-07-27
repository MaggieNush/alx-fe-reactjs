import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails'
import AddRecipeForm from './components/AddRecipeForm'
import EditRecipeForm from './components/EditRecipeForm'

function App() {
  return(
    <Router>
    <div>
      <Routes>
        <Route path='/' element={<AddRecipeForm />} />
        <Route path='/recipes/:recipeList' element={<RecipeList />} />
        <Route path='/recipes/:recipeId' element={<RecipeDetails />} />
        <Route path='/recipes/add' element={<AddRecipeForm />} />
        <Route path='/recipes/:recipetId/edit' element={<EditRecipeForm />} />
      </Routes>
    </div>
    </Router>
  );
};

export default App;
